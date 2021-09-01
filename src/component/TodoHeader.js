import header from '../css/header.module.css';

function TodoHeader(){
    return(
        <header id={header.header}>
            <div className={header.section}>
                <h1 className={header.logo}>TODO APP</h1>
                <div className={header.form}>
                <button type="button" className={header['form-btn']}>
                    <img src="add_button.svg" alt="" className={header["form-img"]} />
                </button>
                <input type="text" className={header['form-text']} placeholder="새로운 할 일 입력"/>
            </div>
        </div>
    </header>
    );
}

export default TodoHeader;