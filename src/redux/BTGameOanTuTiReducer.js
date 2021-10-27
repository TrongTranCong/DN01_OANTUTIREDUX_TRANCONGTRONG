//Khởi tạo giá trị ban đầu store
const stateDefault = {
    ketQua: 'i am iron man, i love you 3000!!!',
    mangOanTuTi: [
        { ma: 'keo', hinhAnh: './imgOanTuTi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './imgOanTuTi/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './imgOanTuTi/bao.png', datCuoc: false }
    ],
    soBanThang: 0,
    soBanChoi: 0,
    computer: 
        { ma: 'bua', hinhAnh: './imgOanTuTi/bua.png' },
    
}
export const BTGameOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            //Reset mảng
            let mangCapNhat = [...state.mangOanTuTi];
            mangCapNhat = mangCapNhat.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                //setState lại mang => render lại giao diện
                return { ...item, datCuoc: false }
            });
            state.mangOanTuTi = mangCapNhat;
            return { ...state };
        }
        case 'PLAY_GAME': {
            // let mangCapNhat = [...state.mangOanTuTi]
            // console.log('action',action)
            //random 1 con số
            let index = Math.floor(Math.random() * 3);
            //Từ số NN => tạo ra 1 quân cược NN{hinhAnh,ma}
            let quanCuocNN = state.mangOanTuTi[index];
            state.computer = quanCuocNN;
            return { ...state };
        }
        case 'END_GAME': {
            let player = state.mangOanTuTi.find((item) => {
                return item.datCuoc === true;
            });
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hòa rồi !!!';

                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'thua sml!!!';
                    } else {
                        state.ketQua = 'i am iron man, i love you 3000!!!';
                        state.soBanThang += 1;
                    } break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'i am iron man, i love you 3000!!!';
                        state.soBanThang += 1;
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'hòa rồi !!!';
                    } else {
                        state.ketQua = 'thua sml!!!'
                    } break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'thua sml!!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'i am iron man, i love you 3000!!!';
                        state.soBanThang += 1;
                    } else {
                        state.ketQua = 'hòa rồi !!!'
                    } break;
                default: state.ketQua = 'i am iron man, i love you 3000!!!';
            }
            state.soBanChoi += 1;
        }

            return { ...state };
        default:
            return { ...state };
    }
}