import React from 'react';
import './Login.css';

const Login = () => {
    return (
    <div class = "main">
            
        <div class = "fill">
            <img src = "https://thumbs.dreamstime.com/z/vertical-green-leaves-background-white-copy-space-white-background-backgrounds-95420776.jpg" class = "test"></img>
        </div>

        <div class = "right_col">
            <div class = "tmp">
                <div class = "Title">Đăng nhập tài khoản của bạn</div>
                <div class = "Subtitle">Bạn chưa có tài khoản? <a>Đăng ký</a></div>
                <div>
                    <input type="text" id="Name" name="Name" placeholder="Số điện thoại" class = "form-control"></input>
                </div>
                <div>
                    <input type="password" id="Name" name="Name" placeholder="Mật khẩu" class = "form-control"></input>
                </div>

                <div class = "forgot">
                <a>Quên mật khẩu?</a>
                </div>
                <div class = "login-btn">
                    Đăng nhập    
                </div>               
            </div>
        </div>
    </div>
    );
};

export default Login;