const Head = (
    <div
        style={{
            width: '50px',
            height: '50px',
            borderRadius: '100%',
            border: '10px solid #000',
            position: 'absolute',
            top: '50px',
            right: '-30px'
        }}
    ></div>
)
const Body = (
    <div
        style={{
            width: '10px',
            height: '100px',
            backgroundColor: '#000',
            position: 'absolute',
            top: '120px',
            right: 0
        }}
    ></div>
)

const Right_arm = (
    <div
        style={{
            width: '100px',
            height: '10px',
            backgroundColor: '#000',
            position: 'absolute',
            top: '150px',
            right: '10px',
            rotate: '30deg',
            transformOrigin: 'right bottom'
        }}
    ></div>
)
const Left_arm = (
    <div
        style={{
            width: '100px',
            height: '10px',
            backgroundColor: '#000',
            position: 'absolute',
            top: '150px',
            right: '-100px',
            rotate: '-30deg',
            transformOrigin: 'left bottom'
        }}
    ></div>
)
const Left_leg = (
    <div
        style={{
            width: '120px',
            height: '10px',
            backgroundColor: '#000',
            position: 'absolute',
            top: '210px',
            right: 0,
            rotate: '-60deg',
            transformOrigin: 'right bottom'
        }}
    ></div>
)
const Right_leg = (
    <div
        style={{
            width: '120px',
            height: '10px',
            backgroundColor: '#000',
            position: 'absolute',
            top: '210px',
            right: '-110px',
            rotate: '60deg',
            transformOrigin: 'left bottom'
        }}
    ></div>
)

export function HangmanDrawing() {
    return (
        <div style={{ position: 'relative' }}>
            {Head}
            {Body}
            {Right_arm}
            {Left_arm}
            {Right_leg}
            {Left_leg}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '50px',
                    width: '10px ',
                    backgroundColor: '#000'
                }}
            />
            <div
                style={{
                    height: '10px',
                    width: '200px ',
                    backgroundColor: '#000',
                    marginLeft: '120px'
                }}
            />
            <div
                style={{
                    height: '500px',
                    width: '10px ',
                    backgroundColor: '#000',
                    marginLeft: '120px'
                }}
            />
            <div
                style={{ height: '10px', width: '250px ', backgroundColor: '#000' }}
            />
        </div>
    )
}
