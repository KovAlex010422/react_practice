import "./app-info.css";

const AppInfo = ({empl, emplIncr}) => {
    return (
        <div className="app-info">
            <h1 >Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {empl}</h2>
            <h2>Премию получат: {emplIncr}</h2>
        </div>
    )
}

export default AppInfo;