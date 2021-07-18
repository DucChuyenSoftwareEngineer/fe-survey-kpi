import React, { PureComponent } from "react";
import BgImg from "../Assets/Images/survey-icon.png"

class HomePage extends PureComponent {
  render() {
    return <div className="d-flex flex-row-fluid">
              <div className="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid">
                <div className="login-form text-center text-white p-7 position-relative overflow-hidden">
                  <div className="login-signin">
                    <div className="mb-20 text-primary">
                      <img src={`${BgImg}`} className="max-h-200px mb-8" />
                      <h1 className="font-weight-bolder">SURVEY ĐÁNH GIÁ MỨC ĐỘ HÀI LÒNG CỦA KHÁCH HÀNG NỘI BỘ</h1>
                      <p className="opacity-40 font-weight-bolder">Phòng Phát triển ứng dụng - BVB</p>
                      <i className="fas fa-star text-warning"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  }
}

export default HomePage;
