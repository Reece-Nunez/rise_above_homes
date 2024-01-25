import { useEffect } from 'react';
import { gsap } from 'gsap';

const HouseAnimation = () => {

    useEffect(() => {
        gsap.set(["#part1", "#part2", "#part3", "#part4"], { opacity: 0 });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
        
        tl.to("#part1", { duration: 1, opacity: 1, delay: 0.1 })
          .to("#part2", { duration: 1, opacity: 1, delay: 0.2 }, "-=1")
          .to("#part3", { duration: 1, opacity: 1, delay: 0.3 }, "-=1")
          .to("#part4", { duration: 1, opacity: 1, delay: 0.4 }, "-=1")
    }, []);

    return (
        <div className='flex justify-center items-center h-screen '>
            <svg
                width="80px"
                height="80px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true" role="img"
                className="iconify iconify--emojione-monotone"
                preserveAspectRatio="xMidYMid meet">
                <path
                id="part1"
                d="M13.29 34.813h7.493v-7.5H13.29v7.5m4.12-6.75h2.623v2.624H17.41v-2.624m0 3.375h2.623v2.626H17.41v-2.626m-3.372-3.375h2.622v2.624h-2.622v-2.624m0 3.375h2.622v2.626h-2.622v-2.626"
                fill="#000000">
                </path>
                <path
                id="part2"
                d="M30.337 34.813h5.245v-7.5h-5.245v7.5m2.998-6.75h1.5v2.624h-1.5v-2.624m0 3.375h1.5v2.626h-1.5v-2.626m-2.248-3.375h1.497v2.624h-1.497v-2.624m0 3.375h1.497v2.626h-1.497v-2.626"
                fill="#000000">
                </path>
                <path
                id="part3"
                d="M35.235 46.103h-7.492v7.501h7.492v-7.501m-4.121 6.75h-2.623v-2.624h2.623v2.624m0-3.374h-2.623v-2.626h2.623v2.626m3.372 3.374h-2.624v-2.624h2.624v2.624m0-3.374h-2.624v-2.626h2.624v2.626" fill="#000000">
                </path>
                <path
                id="part4"
                d="M61.404 49.878c-.064.02-.527.157-.969.473a3.206 3.206 0 0 0-.707-.379V48.49l-.597.17a3.34 3.34 0 0 0-.969.473a3.332 3.332 0 0 0-.966-.473l-.597-.17v1.112l-.543.152c-.063.021-.527.157-.969.474a3.269 3.269 0 0 0-.366-.221V36.544c.075.051.137.083.217.139c4.388 3.047 5.003-2.106 4.523-3.925c-.914-3.476 1.608-4.323 2.303-7.216c1.233-5.146-2.868-7.952-1.601-12.864c1.271-4.911-2.917-15.705-8.317-7.969c-1.784 2.557-3.973-2.034-6.794 1.916c-2.822 3.948-1.358 7.36-.49 9.938c1.729 5.124-1.734 6.785.537 11.075c2.271 4.288-.992 6.355 3.285 8.747c1.395.779 2.107.753 2.59.476v4.191l-11.457-3.169V22.625h2.809l-8.43-5.37v-5.88h.938V9.5h-6.558v1.875h.938v2.896L21.721 9.5L2.986 22.625h2.809v15.759L2 41.455h3.795V58.25H2.049V62h59.849v-3.75h-1.281v-4.528h.185a1.2 1.2 0 0 0 1.199-1.199V49.71l-.597.168m-3.561-29.84a1.884 1.884 0 0 1 0 3.768c-1.042 0 .593-.845.593-1.884c0-1.041-1.635-1.884-.593-1.884m-1.63-10.114a1.27 1.27 0 1 1 0 2.54c-.7 0 .343-.568.343-1.27s-1.043-1.27-.343-1.27m-.016 20.67a1.405 1.405 0 0 1 0 2.812c-.778 0 0-.627 0-1.406c0-.777-.778-1.406 0-1.406m-27.919-7.969h9.365v15h-9.365v-15m-20.608 0h18.733v15H7.67v-15m11.744 30.316a.548.548 0 1 1 0-1.099a.549.549 0 1 1 0 1.099m19.037 5.309H20.694V47.996h.733v-1.465h-8.782v1.465h.73V58.25H7.67V41.455h30.781V58.25m6.602-5.397h-.92v-2.624h.828V52.4c0 .161.034.313.092.453m-.92-3.374v-2.626h1.499v2.626h-1.499m1.297.727s.663.189 1.095.638c.434-.448 1.097-.638 1.097-.638V52.4a.732.732 0 0 1-.731.733h-.73a.73.73 0 0 1-.729-.733v-2.194zm.912 8.044h-6.016V41.455h6.862v8.411a3.241 3.241 0 0 0-.663.362c-.048-.034-.097-.061-.146-.09v-4.036h-5.245v7.501h5.208v4.647m-4.458-8.771v-2.626h1.498v2.626h-1.498m1.498.75v2.624h-1.498v-2.624h1.498m3.806 8.021h-.48v-2.959c.112.201.276.364.48.474v2.485m1.12 0h-.364v-2.333h.364v2.333m.164-2.802h-.732a.73.73 0 0 1-.731-.73v-1.141a1.17 1.17 0 0 0 .896-.576c.068.053.14.096.201.159c.432-.448 1.096-.635 1.096-.635v2.192a.73.73 0 0 1-.73.731m.945 2.802h-.354v-2.513c.142-.082.258-.188.354-.316v2.829m-.2-6.218a.73.73 0 0 1-.714-.728v-2.195s.664.188 1.097.638c.433-.449 1.097-.638 1.097-.638v2.195a.731.731 0 0 1-.731.731h-.294v-.132l-.455.129m1.759 6.218h-1.194v-5.745h.184c.299 0 .564-.121.775-.303v.32c0 .257.098.481.235.676v5.052m0-9.705l-.408.115a3.328 3.328 0 0 0-.968.473a3.198 3.198 0 0 0-.537-.306v-7.372h1.913v7.09m5.678 3.855v-.83c.069.298.241.546.487.711a3.063 3.063 0 0 0-.451.265c-.02-.013-.039-.023-.059-.037c.005-.036.023-.07.023-.109m-5.343-33.873c0 .778.775 1.406 0 1.406a1.405 1.405 0 1 1 0-2.812c.775 0 0 .63 0 1.406m-.039-10.508c1.05 0-.512.854-.512 1.905s1.562 1.904.512 1.904a1.905 1.905 0 1 1 0-3.809m-4.425 6.733c0-.776.631-1.406 1.406-1.406c.774 0-.234.63-.234 1.406c0 .779 1.009 1.407.234 1.407a1.406 1.406 0 0 1-1.406-1.407m3.588 13.157a2.813 2.813 0 0 1 0-5.626c1.553 0-.613 1.26-.613 2.813s2.165 2.813.613 2.813M52.42 58.25h-.364v-4.528h.364v4.528m.981-5.728c0 .405-.327.73-.73.73h-.73a.73.73 0 0 1-.731-.73V50.33s.663.187 1.097.636c.432-.449 1.096-.636 1.096-.636v2.192zm.592-.122v-2.194s.663.189 1.096.639c.433-.449 1.097-.639 1.097-.639V52.4a.732.732 0 0 1-.731.733h-.729a.732.732 0 0 1-.733-.733m.915 5.85h-.186v-4.647h.186v4.647m1.599 0h-1.234v-2.987a1.19 1.19 0 0 0 1.053.656h.182v2.331zm-.182-2.8a.733.733 0 0 1-.732-.733v-1.144c.381-.045.698-.264.883-.579c.072.056.149.098.215.166c.433-.448 1.097-.638 1.097-.638v2.194a.732.732 0 0 1-.731.733h-.732zm1.656 2.8h-1.109v-2.331h.184c.381 0 .706-.191.926-.469v2.8zm-.183-6.214a.729.729 0 0 1-.729-.731V49.11s.661.188 1.094.637c.433-.448 1.097-.637 1.097-.637v2.195a.73.73 0 0 1-.731.731H57.798m2.454 6.214h-1.906v-5.745h.183c.121 0 .231-.034.342-.068v.086a1.2 1.2 0 0 0 1.2 1.199h.182v4.528zm1.279-5.728c0 .405-.327.73-.73.73H60.07a.73.73 0 0 1-.731-.73v-.344c.236-.221.39-.527.39-.874v-.82a2.4 2.4 0 0 1 .707.481c.432-.449 1.096-.636 1.096-.636v2.193z"
                fill="#000000">
                </path>
            </svg>
        </div>
        
    );
};

export default HouseAnimation;