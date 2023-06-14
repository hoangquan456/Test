import React from 'react';
import Taskitem from './Taskitem';

const Taskmanager = () => {
    const list = [
        {name: "chuẩn bị bài mới", info: "chuẩn bị bài cho ngày mai và soạn tập vở", state: 0},
        {name: "ôn từ vựng", info: "viết lại từ mới và ôn từ ngày hôm qua", state: 1},
        {name: "làm bài thuyết trình", info: "làm ppt và gửi cho mọi người cùng xem", state: 1}
    ]

    return (
        <div>
            <h1>Danh sách công việc</h1>
            {list.map((a) =>
                <Taskitem name = {a.name} info = {a.info} state = {a.state}></Taskitem>
            )}
        </div>
    );
};

export default Taskmanager;