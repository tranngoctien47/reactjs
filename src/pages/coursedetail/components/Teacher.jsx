export default function Teacher({ avatar, name, position, content, website }) {
    return (
        <div className="teacher">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="info">
                <div className="name">{name}</div>
                <div className="title">{position}</div>
                <p className="intro">
                    {content}
                </p>
                <p><strong>Website:</strong> <a href="#">{website}</a></p>
            </div>
        </div>
    )
}