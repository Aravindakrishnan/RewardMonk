import MacFolder from "./../../assets/icons/mac-folder.png";
import "./folder.css";

export function FolderContainer() {
    return(
        <div className="group">
        <h2 className="group__info">Your Groups</h2>
        <div className="folder-container">
            <Folder folderName={"docker-study-group"}></Folder>
            <Folder folderName={"variable-group"}></Folder>
            <Folder folderName={"fun-talks-group"}></Folder>
            <Folder folderName={"time-management"}></Folder>

        </div>
        </div>
    )
}

export function Folder({folderName}) {
    return(
        <div className="folder">
            <div className="folder__header">
                <img src={MacFolder} alt="" />
            </div>
            <div className="folder__footer">
                {folderName}
            </div>
        </div>
    )
}