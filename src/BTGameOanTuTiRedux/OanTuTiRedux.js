import React, { Component } from 'react'
import { connect } from 'react-redux'
class OanTuTiRedux extends Component {

    render() {

        // console.log(this.props);
        let { mangOanTuTi, soBanThang, soBanChoi, ketQua, computer } = this.props.BTGameOanTuTiReducer;
        return (
            <div className='py-2 container'>
                <div className="row">
                    <div className="col-3 py-5 player">
                        <div className="theThink py-3">
                            <img width='50' height='50' src={mangOanTuTi.find(item => item.datCuoc === true).hinhAnh} alt="..." />
                        </div>
                        <div className='speech-bubble'></div>
                        <img width='150' height='150' src="./imgOanTuTi/player.png" alt="..." />
                        <div className="row">
                            {mangOanTuTi.map((item, index) => {
                                return <button className='btn btn-light mx-2' key={index}
                                    onClick={() => {
                                        this.props.datCuoc(item.ma);
                                    }}>
                                    <img width='40' height='40' src={item.hinhAnh} alt="..." />
                                </button>
                            })}
                        </div>
                    </div>
                    <div className="col-6">
                        <h3 className='display-4 text-danger'>{ketQua}</h3>
                        <h3 className='display-4 text-success'>Số bàn thắng:
                            <span>{soBanThang}</span>
                        </h3>
                        <h3 className='display-4 text-warning'>Số bàn chơi:
                            <span>{soBanChoi}</span>
                        </h3>
                        <button className='btn btn-success' onClick={() => {
                            this.props.random();
                        }}>
                            PLAY GAME
                        </button>
                    </div>

                    <div className="col-3  py-5 computer ">
                        <div className="theThink py-3">
                            <img width='50' height='50' src={computer.hinhAnh} alt={computer.hinhAnh} />
                        </div>
                        <div className='speech-bubble'></div>
                        <img width='150' height='150' src="./imgOanTuTi/playerComputer.png" alt="..." />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            // const action = {
            //     type: 'DAT_CUOC',
            //     maCuoc
            // }
            // dispatch(action);
            dispatch({
                type: 'DAT_CUOC',
                maCuoc
            })
        },
        random: () => {
            //Muốn dừng vòng lặp vô tận phải cho biến count
            let count = 0;
            //Khai báo hàm lặp đi lặp lại
            let playGameComputerItem = setInterval(() => {
                dispatch({
                    type: 'PLAY_GAME',
                })
                //sau mỗi lần chạy nó sẽ tăng lên 1
                count++;
                if (count > 10) {
                    //Dừng hàm interval
                    clearInterval(playGameComputerItem);
                    dispatch({
                        type:'END_GAME'
                    })
                }
            }, 100);
        }
        
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        BTGameOanTuTiReducer: rootReducer.BTGameOanTuTiReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OanTuTiRedux)