import { asset } from "$fresh/runtime.ts";

export default function Face() {
    return (
        <div class="relative h-[15em]">
            <svg class="w-full h-full" viewBox="0 0 130 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 1">
                    <ellipse id="Ellipse 2" cx="80.0479" cy="64.7746" rx="43" ry="32" transform="rotate(-12.8712 80.0479 64.7746)" fill="url(#paint0_linear_2_13)"/>
                    <ellipse id="Ellipse 4" cx="53.9977" cy="64.6354" rx="50.4448" ry="27.1425" transform="rotate(-53.0902 53.9977 64.6354)" fill="url(#paint1_linear_2_13)"/>
                    <ellipse id="Ellipse 3" cx="48.103" cy="52.867" rx="43" ry="32" transform="rotate(62.8328 48.103 52.867)" fill="url(#paint2_linear_2_13)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_2_13" x1="80.0479" y1="32.7746" x2="80.0479" y2="96.7746" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FA00FF"/>
                    <stop offset="0.96875" stop-color="#073DFE"/>
                    <stop offset="1" stop-color="#2400FF" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_13" x1="53.9977" y1="37.4929" x2="53.9977" y2="91.7779" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4200FF"/>
                    <stop offset="1" stop-color="#07FE6A"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2_13" x1="48.103" y1="20.867" x2="48.103" y2="84.867" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFC700"/>
                    <stop offset="0.96875" stop-color="#BE07FE"/>
                    </linearGradient>
                    <radialGradient id="paint2_radial_1_13">
                        <stop offset="0%" stop-color="#D9D9D900" />
                        <stop offset="80%" stop-color="#D9D9D900" />
                        <stop offset="100%" stop-color="#D9D9D96F" />
                    </radialGradient>
                    </defs>
                    <foreignObject x="21" y="14" width="86" height="86">
                        <img class="rounded-full object-cover w-full h-full object-top" src={asset("face.png")} alt="face" />
                    </foreignObject>
                    <circle id="Ellipse 1" cx="64" cy="57" r="43" fill="url(#paint2_radial_1_13)"/>
            </svg>
        </div>
    );
}
