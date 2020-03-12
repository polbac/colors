export default ({ text, color }) => (
    <React.Fragment>
        <div className='color' style={{ background: color}}>{text}</div>
        <style jsx>{`
            .color{
                width: 250px;
                display: inline-block;
                text-align: center;
            }
        `}</style>
    </React.Fragment>
)