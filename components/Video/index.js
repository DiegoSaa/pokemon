import ReactPlayer from 'react-player';

export default function Video() {
    return (
        <ReactPlayer
            url="https://www.youtube.com/embed/e0mgl1oHWqM"
            playing={true}
            width="100%"
            height="100%"
            controls={false}
        />);
};

