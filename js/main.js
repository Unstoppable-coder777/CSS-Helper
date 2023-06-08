const svgicon = () => {
  svgs = {
    'rgb': `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 3h2v18H2zm18 0h2v18h-2zM5 13h2v1h2v-1h2v1h2v-1h4v1h2v-4h-2v1h-4v-1h-2v1H9v-1H7v1H5zm0-9v4h2V7h8v1h2V7h2V5h-2V4h-2v1H7V4zm0 13v3h2v-1h2v1h2v-1h8v-2h-8v-1H9v1H7v-1H5z" /></svg>`,
    'linear': `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm2.75-7.17A5 5 0 0 0 13 7.1v-3a7.94 7.94 0 0 1 3.9 1.62zM11 7.1a5 5 0 0 0-1.75.73L7.1 5.69A7.94 7.94 0 0 1 11 4.07zM7.83 9.25A5 5 0 0 0 7.1 11h-3a7.94 7.94 0 0 1 1.59-3.9zM7.1 13a5 5 0 0 0 .73 1.75L5.69 16.9A7.94 7.94 0 0 1 4.07 13zm2.15 3.17a5 5 0 0 0 1.75.73v3a7.94 7.94 0 0 1-3.9-1.62zm3.75.73a5 5 0 0 0 1.75-.73l2.15 2.14a7.94 7.94 0 0 1-3.9 1.62zm3.17-2.15A5 5 0 0 0 16.9 13h3a7.94 7.94 0 0 1-1.62 3.9zM16.9 11a5 5 0 0 0-.73-1.75l2.14-2.15a7.94 7.94 0 0 1 1.62 3.9z" /></svg>`,
    'blobshape': `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6c0-1.654-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2h-6.37A2.993 2.993 0 0 0 6 3C4.346 3 3 4.346 3 6c0 1.302.839 2.401 2 2.815v6.369A2.997 2.997 0 0 0 3 18c0 1.654 1.346 3 3 3a2.993 2.993 0 0 0 2.815-2h6.369a2.994 2.994 0 0 0 2.815 2c1.654 0 3-1.346 3-3a2.997 2.997 0 0 0-2-2.816V8.816A2.996 2.996 0 0 0 21 6zm-3-1a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-2.815 12h-6.37A2.99 2.99 0 0 0 7 15.184V8.816A2.99 2.99 0 0 0 8.815 7h6.369A2.99 2.99 0 0 0 17 8.815v6.369A2.99 2.99 0 0 0 15.185 17zM6 5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm0 14a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm12 0a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" /></svg>`,
    'clippath': `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 14.185v-2.369A2.997 2.997 0 0 0 22 9c0-1.654-1.346-3-3-3a2.99 2.99 0 0 0-2.116.876L12.969 5.31c.01-.103.031-.204.031-.31 0-1.654-1.346-3-3-3S7 3.346 7 5c0 .762.295 1.451.765 1.981L6.091 9.212A2.977 2.977 0 0 0 5 9c-1.654 0-3 1.346-3 3s1.346 3 3 3c.159 0 .313-.023.465-.047L7.4 17.532c-.248.436-.4.932-.4 1.468 0 1.654 1.346 3 3 3a2.994 2.994 0 0 0 2.863-2.153l3.962-.792A2.987 2.987 0 0 0 19 20c1.654 0 3-1.346 3-3a2.995 2.995 0 0 0-2-2.815zM19 8a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-9-4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-6 8a1.001 1.001 0 1 1 1 1c-.552 0-1-.449-1-1zm6 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.761-2.172A3.005 3.005 0 0 0 10 16c-.386 0-.752.079-1.091.213l-1.674-2.231C7.705 13.451 8 12.762 8 12c0-.536-.152-1.032-.399-1.467l1.935-2.58c.152.024.305.047.464.047a2.99 2.99 0 0 0 2.116-.876l3.915 1.566c-.01.103-.031.204-.031.31 0 1.302.839 2.401 2 2.815v2.369a2.996 2.996 0 0 0-2 2.815c0 .061.015.117.018.177l-3.257.652zM19 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>`,
    'copy': `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z" /><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg>`,
    'github': `<svg id="star" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" /></svg>`,
    'rgbbottom': `<svg fill="#fff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M428.837,189.516c-2.18-1.258-4.393-2.447-6.622-3.602c0.113-2.506,0.18-5.024,0.18-7.557c0-91.749-74.643-166.393-166.393-166.393S89.607,86.608,89.607,178.357c0,2.533,0.066,5.051,0.18,7.557c-2.229,1.156-4.442,2.343-6.621,3.602C3.706,235.391-23.615,337.357,22.261,416.813c14.875,25.766,36.362,47.08,62.134,61.635c25.003,14.122,53.394,21.587,82.108,21.587c29.047,0,57.768-7.717,83.056-22.318c2.186-1.263,4.333-2.575,6.447-3.924c2.109,1.347,4.25,2.66,6.438,3.924c25.289,14.601,54.01,22.318,83.056,22.318c28.711,0,57.104-7.465,82.107-21.588c25.774-14.558,47.259-35.871,62.135-61.634C535.616,337.357,508.294,235.39,428.837,189.516z M256.001,42.412c73.43,0,133.438,58.52,135.861,131.371c-14.946-4.333-30.463-6.584-46.08-6.584c-28.711,0-57.104,7.465-82.107,21.588c-2.606,1.472-5.156,3.03-7.672,4.639c-2.516-1.608-5.066-3.167-7.674-4.64c-25.003-14.122-53.394-21.587-82.108-21.587c-15.618,0-31.135,2.251-46.081,6.584C122.562,100.931,182.571,42.412,256.001,42.412z M227.907,265.643c7.519-13.024,17.062-24.514,28.094-34.169c11.032,9.656,20.574,21.145,28.094,34.169c7.55,13.076,12.786,27.051,15.661,41.435c-13.738,4.683-28.456,7.226-43.756,7.226c-15.282,0-29.982-2.536-43.704-7.208C215.113,292.877,220.266,278.878,227.907,265.643zM201.54,250.421c-8.01,13.874-13.782,28.434-17.441,43.261c-31.251-19.555-54.024-51.446-61.441-88.804c14.008-4.766,28.735-7.232,43.562-7.232c22.683,0,44.637,5.703,64.061,16.065C219.093,224.487,209.389,236.826,201.54,250.421zM281.72,213.71c19.424-10.361,41.378-16.065,64.061-16.065c14.826,0,29.553,2.466,43.561,7.232c-7.414,37.34-30.166,69.217-61.392,88.775c-3.726-14.968-9.563-29.505-17.489-43.231C302.613,236.825,292.908,224.487,281.72,213.71z M166.502,469.589c-48.492,0-93.658-26.055-117.875-67.999c-36.712-63.587-16.041-144.809,45.826-183.336c11.582,46.886,43.09,86.002,84.993,107.808c-2.067,47.194,16.056,94.041,50.872,127.515C210.654,464.065,188.69,469.589,166.502,469.589z M256.025,435.855c-28.659-25.104-44.9-60.78-46.209-97.632c14.67,4.245,30.166,6.528,46.185,6.528c16.052,0,31.576-2.293,46.273-6.553c-0.364,10.223-1.885,20.478-4.598,30.604C290.609,395.175,276.137,418.29,256.025,435.855z M463.372,401.59c-24.215,41.943-69.382,67.999-117.875,67.999c-22.169,0-44.116-5.517-63.77-15.987c21.695-20.784,37.38-47.155,45.356-76.92c4.492-16.764,6.318-33.817,5.566-50.672c41.854-21.816,73.323-60.907,84.897-107.757C479.415,256.781,500.084,338.003,463.372,401.59z" /></g></g></svg>`,
    'rgba': `<svg fill="#fff" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,2 C17.3333333,7.05448133 20,11.0544813 20,14 C20,18.418278 16.418278,22 12,22 C7.581722,22 4,18.418278 4,14 C4,11.0544813 6.66666667,7.05448133 12,2 Z M12.5401341,5.34306485 L12,4.793 L11.7832437,5.01193635 C8.50224504,8.34406715 6.63844327,11.052329 6.13806422,13.0012894 L17.8619358,13.0012894 C17.378236,11.1172943 15.6204935,8.52377427 12.5401341,5.34306485 L12.5401341,5.34306485 Z" /></svg>`,
    'hsl': `<svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 113.408 113.408" xml:space="preserve"><g><g><path d="M56.596,28.238c-14.37,0-26.271,10.769-27.685,25.043c-0.093,0.913-0.142,1.839-0.142,2.782c0,15.34,12.482,27.825,27.827,27.825c15.346,0,27.825-12.484,27.825-27.825C84.421,40.718,71.942,28.238,56.596,28.238zM56.596,80.183c-0.226,0-0.448-0.023-0.674-0.033V31.974c0.227-0.009,0.448-0.032,0.674-0.032c13.302,0,24.129,10.82,24.129,24.122S69.898,80.183,56.596,80.183z" /><path d="M103.958,59.048c0.065-0.992,0.154-1.981,0.154-2.987c0-0.593-0.07-1.167-0.089-1.752l7.785-5.64c0.574-0.413,0.858-1.125,0.732-1.822c-0.121-0.696-0.625-1.263-1.312-1.459l-9.03-2.562c-0.477-1.645-1.027-3.257-1.676-4.819l5.213-7.698c0.401-0.586,0.42-1.351,0.065-1.965c-0.35-0.611-1.022-0.968-1.736-0.922l-9.151,0.658c-1.051-1.433-2.18-2.803-3.38-4.107l2.218-8.847c0.172-0.69-0.062-1.412-0.607-1.869c-0.536-0.455-1.297-0.56-1.946-0.271l-8.125,3.645c-1.55-1.045-3.188-1.97-4.858-2.828l-0.91-8.844c-0.079-0.703-0.546-1.305-1.214-1.545c-0.662-0.248-1.404-0.086-1.923,0.411l-6.31,6.125C66,9.498,64.115,9.134,62.187,8.907l-3.815-7.862C58.062,0.404,57.416,0,56.706,0s-1.356,0.404-1.671,1.045l-3.794,7.822c-1.958,0.222-3.867,0.59-5.74,1.043L39.235,3.83c-0.511-0.497-1.26-0.653-1.923-0.408c-0.665,0.24-1.134,0.842-1.207,1.552l-0.896,8.718c-1.725,0.875-3.409,1.815-5.005,2.887l-8-3.582c-0.646-0.289-1.4-0.185-1.946,0.269c-0.541,0.455-0.779,1.186-0.606,1.871l2.175,8.648c-1.26,1.36-2.441,2.789-3.538,4.287l-8.952-0.642c-0.763-0.051-1.386,0.31-1.738,0.921c-0.355,0.614-0.329,1.377,0.07,1.963l5.073,7.488c-0.686,1.649-1.262,3.358-1.764,5.094l-8.797,2.504c-0.682,0.191-1.193,0.759-1.314,1.457c-0.124,0.698,0.161,1.407,0.737,1.822l7.575,5.479c-0.023,0.635-0.093,1.26-0.093,1.904c0,1.062,0.089,2.096,0.159,3.139l-7.64,5.526c-0.576,0.42-0.861,1.129-0.737,1.824c0.119,0.695,0.63,1.27,1.314,1.456l9.21,2.618c0.49,1.526,1.064,3.016,1.696,4.467L7.669,83.09c-0.399,0.583-0.42,1.349-0.07,1.965c0.333,0.574,0.945,0.924,1.603,0.924c0.044,0,0.091,0,0.133,0l9.859-0.714c0.913,1.162,1.872,2.277,2.887,3.352l-2.429,9.651c-0.173,0.69,0.063,1.414,0.606,1.871c0.341,0.285,0.761,0.435,1.188,0.435c0.256,0,0.513-0.057,0.758-0.164l9.215-4.13c1.185,0.747,2.399,1.442,3.649,2.081l1.036,10.076c0.072,0.7,0.542,1.303,1.207,1.545c0.205,0.075,0.42,0.112,0.632,0.112c0.476,0,0.938-0.178,1.291-0.527l7.309-7.085c1.318,0.285,2.665,0.495,4.023,0.663l4.474,9.218c0.31,0.639,0.959,1.045,1.668,1.045c0.709,0,1.355-0.406,1.666-1.05l4.485-9.245c1.335-0.183,2.66-0.393,3.957-0.678l7.36,7.141c0.354,0.341,0.821,0.519,1.293,0.519c0.21,0,0.425-0.037,0.63-0.112c0.672-0.242,1.139-0.845,1.209-1.545l1.045-10.188c1.204-0.626,2.371-1.307,3.51-2.025l9.349,4.186c0.242,0.107,0.494,0.159,0.756,0.159c0.425,0,0.85-0.145,1.189-0.43c0.537-0.457,0.771-1.186,0.603-1.871l-2.483-9.839c0.957-1.026,1.867-2.081,2.73-3.188l10.062,0.724c0.052,0.01,0.098,0.01,0.136,0.01c0.657,0,1.273-0.351,1.609-0.929c0.355-0.611,0.322-1.382-0.079-1.961l-5.549-8.186c0.598-1.367,1.125-2.772,1.592-4.205l9.445-2.693c0.682-0.195,1.195-0.761,1.316-1.456c0.126-0.704-0.158-1.409-0.732-1.824L103.958,59.048z M90.162,56.701c0,18.502-15.056,33.559-33.567,33.559c-18.508,0-33.563-15.057-33.563-33.559c0-18.51,15.056-33.563,33.563-33.563C75.106,23.137,90.162,38.191,90.162,56.701z" /></g></g></svg>`,
    'hsla': `<svg fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 20 20"enable-background="new 0 0 20 20" xml:space="preserve"><path d="M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S14.4,2,10,2z" /><path d="M10,4v12c3.3,0,6-2.7,6-6S13.3,4,10,4z" /></svg>`,
    'hex': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M5.43747 3L3.15175 7L5.43746 11H9.99111L12.2768 7L9.99111 3L5.43747 3ZM14.0089 6L11.4397 1.50386C11.2616 1.19229 10.9303 1 10.5714 1H4.85714C4.49829 1 4.16694 1.19229 3.9889 1.50386L1.13176 6.50386C0.956081 6.81129 0.956081 7.18871 1.13176 7.49614L3.70539 12L1.13176 16.5039C0.956081 16.8113 0.956081 17.1887 1.13176 17.4961L3.9889 22.4961C4.16694 22.8077 4.49829 23 4.85714 23H10.5714C10.9303 23 11.2616 22.8077 11.4397 22.4961L14.0089 18H19.1428C19.5017 18 19.833 17.8077 20.0111 17.4961L22.8682 12.4961C23.0439 12.1887 23.0439 11.8113 22.8682 11.5039L20.0111 6.50386C19.833 6.19229 19.5017 6 19.1428 6L14.0089 6ZM14.0089 16L11.7232 12L14.0089 8L18.5625 8L20.8482 12L18.5625 16H14.0089ZM12.2768 17L9.99111 13H5.43747L3.15175 17L5.43747 21H9.99111L12.2768 17Z"fill="#fff" /></svg>`,
    'linearbottom': `<svg fill="#fff" width="28" height="28" viewBox="0 0 32 32" id="icon"xmlns="http://www.w3.org/2000/svg"><path d="M26,4H6A2.0023,2.0023,0,0,0,4,6V26a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6A2.0023,2.0023,0,0,0,26,4ZM22,26V22H18v4H14V22H10V18h4V14H10V10h4V6h4v4h4V6h4V26Z" /><rect x="14" y="10" width="4" height="4" /><rect x="14" y="18" width="4" height="4" /><rect x="18" y="14" width="4" height="4" /><rect fill="none" id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;"class="cls-1" width="32" height="32" /></svg>`,
    'doublelinear': `<svg fill="#fff" height="24" width="24" version="1.1" id="Layer_1"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M0,100.174v178.087h512V100.174H0z M405.658,239.924v-34.011H55.652v-33.391h350.005v-34.016l50.69,50.716 L405.658,239.924z" /></g></g><g><g><polygon points="44.522,300.522 0,345.043 0,411.826 89.044,411.826 89.044,345.043 		" /></g></g><g><g><polygonpoints="467.478,300.522 422.957,345.043 422.957,411.826 512,411.826 512,345.043 		" /></g></g></svg>`,
    'gratext': `<svg fill="#fff" width="20" height="20" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M460.343 1618.286h312.686V301.714H509.714V633.6H208V0h1503.086v633.6H1409.37V301.714H1148.8v1316.572h309.943V1920h-998.4z" fill-rule="evenodd"/></svg>`,
    'blobbottom': `<svg fill="#fff" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M25.271 21.676c0 5.103-4.136 9.24-9.24 9.24s-9.24-4.136-9.24-9.24 4.136-9.24 9.24-9.24 9.24 4.137 9.24 9.24zM9.772 8.197c1.565 1.068 2.412 3.679 2.064 5.244 0.634-0.324 1.311-0.576 2.020-0.747-1.192-0.942-1.956-3.396-1.071-5.121 0.825-1.607-0.653-3.311-2.285-2.817-1.896 0.574-1.749 2.746-0.729 3.442zM17.546 12.56c1.062 0.175 2.062 0.531 2.969 1.035-0.735-2.185 0.277-5.937 2.843-7.472 1.5-0.898 1.842-4.123-0.843-4.935-2.31-0.7-4.373 1.698-3.235 3.988 1.361 2.74 0.214 6.171-1.733 7.384zM7.178 19.027c0.521-1.743 1.542-3.269 2.896-4.413-1.891-2.113-3.046-5.066-3.251-8.061-0.253-3.682-3.199-4.568-4.894-3.398-1.675 1.156-2.118 4.335 1.25 6.351 3.208 1.919 4.658 6.008 3.999 9.521zM29.503 7.588c-2.062-0.953-5.127 0.729-5.152 3.865-0.012 1.463-0.548 2.848-1.545 3.94 1.211 1.305 2.050 2.961 2.346 4.798-0.355-3.266 0.005-5.061 1.962-5.597 5.95-1.626 4.835-5.876 2.388-7.007z"></path></svg>`,
    'blobbottom2': `<svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M256 16c-30 0-50 20-50 40 0 20.478 10.487 33.113 22.063 52.625-20.646 3.89-39.81 11.992-56.532 23.406-5.608-21.973-7.116-38.335-21.593-52.81-14.14-14.143-42.443-14.152-63.656 7.06-21.212 21.214-21.204 49.515-7.06 63.657 14.476 14.478 30.837 15.985 52.81 21.594-11.413 16.724-19.516 35.887-23.405 56.532C89.113 216.488 76.478 206 56 206c-20 0-40 20-40 50s20 50 40 50c20.478 0 33.113-10.487 52.625-22.063 3.89 20.646 11.992 39.81 23.406 56.532-21.973 5.608-38.335 7.116-52.81 21.592-14.143 14.142-14.152 42.444 7.06 63.657 21.214 21.212 49.515 21.204 63.657 7.06 14.478-14.476 15.985-30.837 21.594-52.81 16.724 11.413 35.887 19.516 56.532 23.405C216.488 422.887 206 435.522 206 456c0 20 20 40 50 40s50-20 50-40c0-20.478-10.487-33.113-22.063-52.625 20.646-3.89 39.81-11.992 56.532-23.406 5.608 21.973 7.116 38.335 21.592 52.81 14.142 14.143 42.444 14.152 63.657-7.06 21.212-21.214 21.204-49.515 7.06-63.658-14.476-14.477-30.837-15.984-52.81-21.593 11.413-16.724 19.516-35.887 23.405-56.533C422.887 295.512 435.522 306 456 306c20 0 40-20 40-50s-20-50-40-50c-20.478 0-33.113 10.487-52.625 22.063-3.89-20.646-11.992-39.81-23.406-56.532 21.973-5.608 38.335-7.116 52.81-21.593 14.143-14.14 14.152-42.443-7.06-63.656-21.214-21.212-49.515-21.204-63.658-7.06-14.477 14.476-15.984 30.837-21.593 52.81-16.724-11.413-35.887-19.516-56.533-23.405C295.512 89.113 306 76.478 306 56c0-20-20-40-50-40zm0 180c16.568 0 31.58 6.705 42.438 17.563C309.294 224.42 316 239.433 316 256c0 16.568-6.705 31.58-17.563 42.438C287.58 309.294 272.567 316 256 316c-16.568 0-31.58-6.705-42.438-17.563C202.706 287.58 196 272.567 196 256c0-16.568 6.705-31.58 17.563-42.438C224.42 202.706 239.433 196 256 196z"/></svg>`,
    'clipb1': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83827 18.5097L11.1284 5.54947C11.5107 4.86982 12.4893 4.86982 12.8716 5.54947L20.1617 18.5097C20.5367 19.1763 20.055 20 19.2902 20H4.70985C3.94502 20 3.46331 19.1763 3.83827 18.5097Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
    'clipb2': `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.7944 8H16.2056C14.8934 8 13.7335 8.85275 13.3421 10.1052L5.21713 36.1052C4.61345 38.037 6.05665 40 8.08057 40H39.9194C41.9433 40 43.3866 38.037 42.7829 36.1052L34.6579 10.1052C34.2665 8.85275 33.1066 8 31.7944 8Z" stroke="#fff" stroke-width="4" /></svg>`,
    'clipb3': ` <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z" stroke="#fff" stroke-width="4" /></svg>`,
    'clipb4': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_734_37368)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.1212 15.5355C0.168583 13.5829 0.168583 10.4171 2.1212 8.46444L8.46438 2.12127C10.417 0.168644 13.5828 0.168644 15.5354 2.12127L21.8786 8.46444C23.8312 10.4171 23.8312 13.5829 21.8786 15.5355L15.5354 21.8787C13.5828 23.8313 10.417 23.8313 8.46438 21.8787L2.1212 15.5355ZM3.53542 9.87865C2.36384 11.0502 2.36385 12.9497 3.53542 14.1213L9.87859 20.4645C11.0502 21.636 12.9497 21.636 14.1212 20.4645L20.4644 14.1213C21.636 12.9497 21.636 11.0502 20.4644 9.87865L14.1212 3.53548C12.9497 2.36391 11.0502 2.36391 9.87859 3.53548L3.53542 9.87865Z" fill="#fff"/></g><defs><clipPath id="clip0_734_37368"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`,
    'clipb5': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0605 2.93203C11.3983 2.68689 11.5672 2.56432 11.7518 2.51696C11.9148 2.47514 12.0858 2.47514 12.2488 2.51696C12.4334 2.56432 12.6023 2.68689 12.9401 2.93203L21.0586 8.82396C21.397 9.06956 21.5663 9.19235 21.6686 9.3535C21.7589 9.49579 21.8119 9.65862 21.8224 9.82684C21.8344 10.0174 21.7697 10.2162 21.6404 10.6138L18.5401 20.1449C18.4109 20.5421 18.3463 20.7407 18.2247 20.8876C18.1173 21.0173 17.979 21.1178 17.8224 21.1798C17.6451 21.25 17.4362 21.25 17.0186 21.25H6.98203C6.56437 21.25 6.35554 21.25 6.17822 21.1798C6.02164 21.1178 5.88325 21.0173 5.77589 20.8876C5.65429 20.7407 5.58969 20.5421 5.4605 20.1449L2.36021 10.6138C2.23086 10.2162 2.16619 10.0174 2.17817 9.82684C2.18874 9.65862 2.24166 9.49579 2.33202 9.3535C2.43434 9.19235 2.60355 9.06956 2.94196 8.82396L11.0605 2.93203Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'clipb6': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5679 11.223C21.7255 11.5066 21.8042 11.6484 21.8351 11.7985C21.8625 11.9315 21.8625 12.0685 21.8351 12.2015C21.8042 12.3516 21.7255 12.4934 21.5679 12.777L17.4568 20.177C17.2904 20.4766 17.2072 20.6263 17.0889 20.7354C16.9842 20.8318 16.8601 20.9049 16.7249 20.9495C16.5721 21 16.4008 21 16.0582 21H7.94104C7.5984 21 7.42708 21 7.27428 20.9495C7.1391 20.9049 7.01502 20.8318 6.91033 20.7354C6.79199 20.6263 6.70879 20.4766 6.54239 20.177L2.43128 12.777C2.27372 12.4934 2.19494 12.3516 2.16406 12.2015C2.13672 12.0685 2.13672 11.9315 2.16406 11.7985C2.19494 11.6484 2.27372 11.5066 2.43128 11.223L6.54239 3.82297C6.70879 3.52345 6.79199 3.37369 6.91033 3.26463C7.01502 3.16816 7.1391 3.09515 7.27428 3.05048C7.42708 3 7.5984 3 7.94104 3L16.0582 3C16.4008 3 16.5721 3 16.7249 3.05049C16.8601 3.09515 16.9842 3.16816 17.0889 3.26463C17.2072 3.37369 17.2904 3.52345 17.4568 3.82297L21.5679 11.223Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'clipb7': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1142 2.43753C11.6725 2.16175 12.3274 2.16175 12.8858 2.43752L19.1609 5.53717C19.7037 5.80531 20.0959 6.30493 20.2274 6.89592L21.7955 13.9432C21.925 14.5252 21.7882 15.1346 21.4222 15.6052L17.051 21.2276C16.6721 21.7149 16.0893 22 15.472 22H8.52798C7.91067 22 7.32795 21.7149 6.94905 21.2276L2.57778 15.6052C2.21185 15.1346 2.07497 14.5252 2.20446 13.9432L3.77264 6.89592C3.90415 6.30493 4.2963 5.80531 4.83914 5.53717L11.1142 2.43753Z" stroke="#fff" stroke-width="2"/></svg>`,
    'clipb8': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Shape / Octagon"><path id="Vector" d="M14.4053 21H9.59375C9.10457 21 8.86006 20.9996 8.62988 20.9443C8.42581 20.8953 8.23099 20.815 8.05204 20.7053C7.85021 20.5817 7.67763 20.4091 7.33173 20.0632L3.9375 16.6689C3.59182 16.3233 3.41857 16.15 3.29492 15.9482C3.18526 15.7693 3.10425 15.5743 3.05526 15.3702C3 15.14 3 14.8945 3 14.4053V9.59375C3 9.10457 3 8.86006 3.05526 8.62988C3.10425 8.42581 3.18526 8.23098 3.29492 8.05204C3.41748 7.85205 3.58846 7.68107 3.92809 7.34144L3.9375 7.33173L7.33173 3.9375L7.3414 3.92813C7.68106 3.58847 7.85204 3.41748 8.05204 3.29492C8.23099 3.18526 8.42581 3.10425 8.62988 3.05526C8.86006 3 9.10457 3 9.59375 3H14.4053C14.8945 3 15.14 3 15.3702 3.05526C15.5743 3.10425 15.7693 3.18526 15.9482 3.29492C16.15 3.41857 16.3233 3.59181 16.6689 3.9375L20.0632 7.33173C20.409 7.67759 20.5817 7.85022 20.7053 8.05205C20.815 8.23099 20.8953 8.42581 20.9443 8.62988C20.9996 8.86006 21 9.10457 21 9.59375V14.4053M20.9996 14.4062C20.9996 14.8954 20.9996 15.14 20.9443 15.3702C20.8953 15.5743 20.815 15.7693 20.7053 15.9482C20.5817 16.1501 20.4091 16.323 20.0632 16.6689L16.6689 20.0632C16.323 20.4091 16.1501 20.5817 15.9482 20.7053C15.7693 20.815 15.5743 20.8953 15.3702 20.9443C15.14 20.9996 14.8954 20.9996 14.4062 20.9996" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
    'clipb9': `<svg width="30" height="30" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="layer1"><path d="M 10 1.9355469 L 4.6757812 3.8730469 L 1.84375 8.7792969 L 2.828125 14.359375 L 7.1679688 18 L 12.832031 18 L 17.171875 14.359375 L 18.15625 8.7792969 L 15.324219 3.8730469 L 10 1.9355469 z M 10 3 L 14.638672 4.6875 L 17.107422 8.9648438 L 16.25 13.826172 L 12.46875 17 L 7.53125 17 L 3.75 13.826172 L 2.8925781 8.9648438 L 5.3613281 4.6875 L 10 3 z " style="fill:#fff; fill-opacity:1; stroke:none; stroke-width:0px;"/></g></svg>`,
    'clipb10': `<svg width="30" height="30" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="layer1"><path d="M 7.4042969 2 L 3.2050781 5.0625 L 1.5996094 10 L 3.2050781 14.9375 L 7.4042969 18 L 12.595703 18 L 16.794922 14.9375 L 18.400391 10 L 16.794922 5.0625 L 12.595703 2 L 7.4042969 2 z M 7.7304688 3 L 12.269531 3 L 15.945312 5.6796875 L 17.347656 10 L 15.945312 14.320312 L 12.269531 17 L 7.7304688 17 L 4.0546875 14.320312 L 2.6523438 10 L 4.0546875 5.6796875 L 7.7304688 3 z " style="fill:#fff; fill-opacity:1; stroke:none; stroke-width:0px;"/></g></svg>`,
    'clipb11': `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Complete"><g id="Circle"><circle cx="12" cy="12" data-name="Circle" fill="none" id="Circle-2" r="10"stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></g></g></svg>`,
    'clipb12': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
  };
  return svgs;
};

const header = () => {
  head = `
        <nav class="flex">
            <button id="rgbbox" class="menu-btn1">
                ${svgicon().rgb}
            </button>
            <button id="gradientbox" class="menu-btn1">
                ${svgicon().linear}
            </button>
            <button id="blob" class="menu-btn1">
                ${svgicon().blobshape}</button>
            <button id="clipping" class="menu-btn1">
                ${svgicon().clippath}</button>
        </nav>`;

  document.getElementById("top__header").innerHTML = head;
};

function bottom_bar(nameOfcontent) {
  if (nameOfcontent === "clip") {
    bottom = `
    <nav class="flex-1">
        <button onclick="clippath()" class="menu-btn1">${svgicon().clipb1
      }</button>
        <button onclick="clip__2()" class="menu-btn1">${svgicon().clipb2
      }</button>
        <button onclick="clip__3()" class="menu-btn1">${svgicon().clipb3
      }</button>
        <button onclick="clip__4()" class="menu-btn1">${svgicon().clipb4
      }</button>
        <button onclick="clip__5()" class="menu-btn1">${svgicon().clipb5
      }</button>
        <button onclick="clip__6()" class="menu-btn1">${svgicon().clipb6
      }</button>
        <button onclick="clip__7()" class="menu-btn1">${svgicon().clipb7
      }</button>
        <button onclick="clip__8()" class="menu-btn1">${svgicon().clipb8
      }</button>
        <button onclick="clip__9()" class="menu-btn1">${svgicon().clipb9
      }</button>
        <button onclick="clip__10()" class="menu-btn1">${svgicon().clipb10
      }</button>
        <button onclick="clip__11()" class="menu-btn1">${svgicon().clipb11
      }</button>
        <button onclick="clip__12()" class="menu-btn1">${svgicon().clipb12
      }</button>
    </nav>
    `;
  } else if (nameOfcontent === "linear") {
    bottom = `
    <nav style="display: flex;justify-content: center;gap: .5em;padding: 0 .1em;">
        <button onclick="gradient()" class="menu-btn1">${svgicon().linearbottom
      }</button>
        <button onclick="gradientper()" class="menu-btn1">${svgicon().doublelinear
      }</button>
        <button onclick="gradienttext()" class="menu-btn1">${svgicon().gratext
      }</button>
    </nav>
    `;
  } else if (nameOfcontent === "blob") {
    bottom = `
    <nav style="display: flex;justify-content: center;gap: .5em;">
        <button onclick="blob()" class="menu-btn1">${svgicon().blobbottom
      }</button>
        <button onclick="fullblob()" class="menu-btn1">${svgicon().blobbottom2
      }</button>
    </nav>
    `;
  } else {
    bottom = `
    <nav style="display: flex;justify-content: center;gap: .5em;">
        <button onclick="rgb()" class="menu-btn1">${svgicon().rgbbottom
      }</button>
        <button onclick="rgba()" class="menu-btn1">${svgicon().rgba}</button>
        <button onclick="hsl()" class="menu-btn1">${svgicon().hsl}</button>
        <button onclick="hsla()" class="menu-btn1">${svgicon().hsla}</button>
        <button onclick="hexcode()" class="menu-btn1">${svgicon().hex}</button>
    </nav>
    `;
  }
  document.getElementById("bottom__side").innerHTML = bottom;
}

const rgb = () => {
  main = `
        <div class="rgb-box">
            <div class="color-code"><input type="text" name="color-code" id="color-code" value="255 , 255 , 255" disabled></div>
            <div class="limiter"><input oninput="RGB()" type="range" value="255" min="0" max="255" name="red" id="red"></div>
            <div class="limiter"><input oninput="RGB()" type="range" value="255" min="0" max="255" name="green" id="green"></div>
            <div class="limiter"><input oninput="RGB()" type="range" value="255" min="0" max="255" name="blue" id="blue"></div>
            <button type="submit" class="custom-btn" id="copy-btn" onclick="copycode()">${svgicon().copy
    }Copy</button>
        </div>
        <a href="https://github.com/Unstoppable-coder777" target="_blank" class="color-bg" id="showcolor">${svgicon().github
    }</a>
    `;
  document.getElementById("content").innerHTML = main;
  localStorage.setItem("status", "rgb");
  bottom_bar("rgb");
};

const gradient = () => {
  linear = `
    <div class="linear-box">
        <div class="codes"><div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-1" value="255 , 255 , 255" disabled></div><div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-2" value="255 , 255 , 255" disabled></div></div>
        <div class="limiter"><select oninput="Gradient()" name="option" id="option"><option id="degree">45deg</option><option>to right</option><option>to left</option><option>to top</option><option>to bottom</option><option>to right top</option><option>to right bottom</option><option>to left top</option><option>to left bottom</option><option>to top right</option><option>to top left</option><option>to bottom right</option><option>to bottom left</option></select></div>
        <div class="limiter"><input oninput="Gradient()" type="range" value="0" min="0" max="360" id="l-deg"></div>
        <div class="limiter"><input oninput="Gradient()" type="range" value="255" min="0" max="255" name="red" id="red-linear"></div>
        <div class="limiter"><input oninput="Gradient()" type="range" value="255" min="0" max="255" name="green" id="green-linear"></div>
        <div class="limiter"><input oninput="Gradient()" type="range" value="255" min="0" max="255" name="blue" id="blue-linear"></div>
        <div class="limiter"><input oninput="Gradient()" type="range" value="255" min="0" max="255" name="red" id="red-linear-2"></div>
        <div class="limiter"><input oninput="Gradient()" type="range" value="255" min="0" max="255" name="green" id="green-linear-2"></div>
        <div class="limiter"><input oninput="Gradient()" type="range" value="255" min="0" max="255" name="blue" id="blue-linear-2"></div>
        <button type="submit" class="custom-btn" id="copy-btn-linear" onclick="copylinear()">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-1"><div id="showcolor-linear"></div></div>
   `;
  bottom_bar("linear");
  document.getElementById("content").innerHTML = linear;
  localStorage.setItem("status", "gradient");
};

const blob = () => {
  fancy = `
    <div class="blob-box">
        <div class="codes"><div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-3" value="0%  100%  0%  100%" disabled></div><div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-4" value="100%  0%  100%  0%" disabled></div></div>
        <div class="limiter"><input oninput="blobmaker()" type="range" value="0" min="0" max="100" id="top"></div>
        <div class="limiter"><input oninput="blobmaker()" type="range" value="100" min="0" max="100" id="bottom"></div>
        <div class="limiter"><input oninput="blobmaker()" type="range" value="100" min="0" max="100" id="left"></div>
        <div class="limiter"><input oninput="blobmaker()" type="range" value="0" min="0" max="100" id="right"></div>
        <button type="submit" class="custom-btn" id="copy-btn" onclick="copyblob()">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="showcolor-blob"></div></div>
    `;
  bottom_bar("blob");
  document.getElementById("content").innerHTML = fancy;
  localStorage.setItem("status", "blob");
};

const clippath = () => {
  clipp = `
    <div class="linear-box">
        <div class="grid">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('triangle','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('triangle','y1')" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('triangle','x2')" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('triangle','y2')" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('triangle','x3')" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('triangle','y3')" id="y3"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),clipmaker()" value="50" min="0" max="100" id="all"></div>
        <button type="submit" class="custom-btn" id="copy-btn" onclick="copyclip('triangle')">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="showcolor-clip"></div></div>
    `;
  bottom_bar("clip");
  localStorage.setItem("status", "clip");
  document.getElementById("content").innerHTML = clipp;
};

function RGB() {
  let red = document.getElementById("red").value;
  let blue = document.getElementById("blue").value;
  let green = document.getElementById("green").value;

  let show = document.getElementById("showcolor");

  let color = red + " , " + green + " , " + blue;

  document.getElementById("color-code").value = color;
  localStorage.setItem("rgbcode", color);
  show.style.color = `rgb(${color})`;
}

function copycode() {
  let data = document.querySelector("#color-code").value;
  data = `rgb(${data});`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
}

function Gradient() {
  let red = document.getElementById("red-linear").value;
  let blue = document.getElementById("blue-linear").value;
  let green = document.getElementById("green-linear").value;
  let red1 = document.getElementById("red-linear-2").value;
  let blue1 = document.getElementById("blue-linear-2").value;
  let green1 = document.getElementById("green-linear-2").value;
  let ldeg = document.getElementById("l-deg").value;
  const dropdownValue = document.querySelector("#option");
  let degree = document.querySelector("#degree");

  degree.textContent = ldeg + "deg";

  let show = document.getElementById("showcolor-linear");

  const color = red + " , " + green + " , " + blue;
  const color2 = red1 + " , " + green1 + " , " + blue1;

  document.getElementById("color-code-1").value = `${color}`;
  document.getElementById("color-code-2").value = `${color2}`;

  const data = `linear-gradient(${dropdownValue.value},rgb(${color}),rgb(${color2}))`;
  show.style.background = `${data}`;
}

function copylinear() {
  let ldeg = document.getElementById("l-deg").value;
  const dropdownValue = document.querySelector("#option");
  let degree = document.querySelector("#degree");

  degree.textContent = ldeg + "deg";

  const data1 = document.getElementById("color-code-1").value;
  const data2 = document.getElementById("color-code-2").value;

  let data = `background:linear-gradient(${dropdownValue.value},rgb(${data1}),rgb(${data2}));`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn-linear");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
}

function blobmaker() {
  let top = document.getElementById("top").value;
  let bottom = document.getElementById("bottom").value;
  let left = document.getElementById("left").value;
  let right = document.getElementById("right").value;

  let show = document.getElementById("showcolor-blob");

  let border_radius_1 = `${top}%  ${100 - top}%  ${100 - bottom}%  ${bottom}%`;
  let border_radius_2 = `${left}%  ${right}%  ${100 - right}%  ${100 - left}%`;

  document.getElementById("color-code-3").value = `${border_radius_1}`;
  document.getElementById("color-code-4").value = `${border_radius_2}`;
  show.style.borderRadius = `${border_radius_1} / ${border_radius_2}`;
}

function copyblob() {
  let data1 = document.querySelector("#color-code-3").value;
  let data2 = document.querySelector("#color-code-4").value;
  data = `border-radius:${data1} / ${data2};`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
}

function clipmaker() {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;

  let show = document.getElementById("showcolor-clip");
  let cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%`;

  show.style.clipPath = `polygon(${cordinates})`;
}

copyclip = (shape) => {
  if (shape === "triangle") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%`;
  } else if (shape === "trapezoid") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%`;
  } else if (shape === "parallelogram") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%`;
  } else if (shape === "rhombus") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%`;
  } else if (shape === "pentagon") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var x5 = document.getElementById("x5").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;
    var y5 = document.getElementById("y5").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%`;
  } else if (shape === "hexagon") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var x5 = document.getElementById("x5").value;
    var x6 = document.getElementById("x6").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;
    var y5 = document.getElementById("y5").value;
    var y6 = document.getElementById("y6").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%`;
  } else if (shape === "heptagon") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var x5 = document.getElementById("x5").value;
    var x6 = document.getElementById("x6").value;
    var x7 = document.getElementById("x7").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;
    var y5 = document.getElementById("y5").value;
    var y6 = document.getElementById("y6").value;
    var y7 = document.getElementById("y7").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%`;
  } else if (shape === "octagon") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var x5 = document.getElementById("x5").value;
    var x6 = document.getElementById("x6").value;
    var x7 = document.getElementById("x7").value;
    var x8 = document.getElementById("x8").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;
    var y5 = document.getElementById("y5").value;
    var y6 = document.getElementById("y6").value;
    var y7 = document.getElementById("y7").value;
    var y8 = document.getElementById("y8").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%`;
  } else if (shape === "nonagon") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var x5 = document.getElementById("x5").value;
    var x6 = document.getElementById("x6").value;
    var x7 = document.getElementById("x7").value;
    var x8 = document.getElementById("x8").value;
    var x9 = document.getElementById("x9").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;
    var y5 = document.getElementById("y5").value;
    var y6 = document.getElementById("y6").value;
    var y7 = document.getElementById("y7").value;
    var y8 = document.getElementById("y8").value;
    var y9 = document.getElementById("y9").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%,${x9}% ${y9}%`;
  } else if (shape === "decagon") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var x5 = document.getElementById("x5").value;
    var x6 = document.getElementById("x6").value;
    var x7 = document.getElementById("x7").value;
    var x8 = document.getElementById("x8").value;
    var x9 = document.getElementById("x9").value;
    var x10 = document.getElementById("x10").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;
    var y5 = document.getElementById("y5").value;
    var y6 = document.getElementById("y6").value;
    var y7 = document.getElementById("y7").value;
    var y8 = document.getElementById("y8").value;
    var y9 = document.getElementById("y9").value;
    var y10 = document.getElementById("y10").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%,${x9}% ${y9}%,${x10}% ${y10}%`;
  } else if (shape === "circle") {
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var scale = document.getElementById("scale").value;

    var cordinates = `${scale}% at ${x1}% ${y1}%`;
  } else if (shape === "star") {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var x4 = document.getElementById("x4").value;
    var x5 = document.getElementById("x5").value;
    var x6 = document.getElementById("x6").value;
    var x7 = document.getElementById("x7").value;
    var x8 = document.getElementById("x8").value;
    var x9 = document.getElementById("x9").value;
    var x10 = document.getElementById("x10").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var y4 = document.getElementById("y4").value;
    var y5 = document.getElementById("y5").value;
    var y6 = document.getElementById("y6").value;
    var y7 = document.getElementById("y7").value;
    var y8 = document.getElementById("y8").value;
    var y9 = document.getElementById("y9").value;
    var y10 = document.getElementById("y10").value;

    var cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%,${x9}% ${y9}%,${x10}% ${y10}%`;
  }

  if (shape === "circle") {
    data = `clip-path:circle(${cordinates});`;
  } else {
    data = `clip-path:polygon(${cordinates});`;
  }

  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
};

function axis(shape, cord) {
  if (shape === "triangle") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");

    var axises = [x1, x2, x3, y1, y2, y3];
  } else if (shape === "trapezoid") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");

    var axises = [x1, x2, x3, x4, y1, y2, y3, y4];
  } else if (shape === "parallelogram") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");

    var axises = [x1, x2, x3, x4, y1, y2, y3, y4];
  } else if (shape === "rhombus") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");

    var axises = [x1, x2, x3, x4, y1, y2, y3, y4];
  } else if (shape === "pentagon") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var x5 = document.getElementById("x5");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var y5 = document.getElementById("y5");

    var axises = [x1, x2, x3, x4, x5, y1, y2, y3, y4, y5];
  } else if (shape === "hexagon") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var x5 = document.getElementById("x5");
    var x6 = document.getElementById("x6");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var y5 = document.getElementById("y5");
    var y6 = document.getElementById("y6");

    var axises = [x1, x2, x3, x4, x5, x6, y1, y2, y3, y4, y5, y6];
  } else if (shape === "heptagon") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var x5 = document.getElementById("x5");
    var x6 = document.getElementById("x6");
    var x7 = document.getElementById("x7");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var y5 = document.getElementById("y5");
    var y6 = document.getElementById("y6");
    var y7 = document.getElementById("y7");

    var axises = [x1, x2, x3, x4, x5, x6, x7, y1, y2, y3, y4, y5, y6, y7];
  } else if (shape === "octagon") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var x5 = document.getElementById("x5");
    var x6 = document.getElementById("x6");
    var x7 = document.getElementById("x7");
    var x8 = document.getElementById("x8");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var y5 = document.getElementById("y5");
    var y6 = document.getElementById("y6");
    var y7 = document.getElementById("y7");
    var y8 = document.getElementById("y8");

    var axises = [
      x1,
      x2,
      x3,
      x4,
      x5,
      x6,
      x7,
      x8,
      y1,
      y2,
      y3,
      y4,
      y5,
      y6,
      y7,
      y8,
    ];
  } else if (shape === "nonagon") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var x5 = document.getElementById("x5");
    var x6 = document.getElementById("x6");
    var x7 = document.getElementById("x7");
    var x8 = document.getElementById("x8");
    var x9 = document.getElementById("x9");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var y5 = document.getElementById("y5");
    var y6 = document.getElementById("y6");
    var y7 = document.getElementById("y7");
    var y8 = document.getElementById("y8");
    var y9 = document.getElementById("y9");

    var axises = [
      x1,
      x2,
      x3,
      x4,
      x5,
      x6,
      x7,
      x8,
      x9,
      y1,
      y2,
      y3,
      y4,
      y5,
      y6,
      y7,
      y8,
      y9,
    ];
  } else if (shape === "decagon") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var x5 = document.getElementById("x5");
    var x6 = document.getElementById("x6");
    var x7 = document.getElementById("x7");
    var x8 = document.getElementById("x8");
    var x9 = document.getElementById("x9");
    var x10 = document.getElementById("x10");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var y5 = document.getElementById("y5");
    var y6 = document.getElementById("y6");
    var y7 = document.getElementById("y7");
    var y8 = document.getElementById("y8");
    var y9 = document.getElementById("y9");
    var y10 = document.getElementById("y10");

    var axises = [
      x1,
      x2,
      x3,
      x4,
      x5,
      x6,
      x7,
      x8,
      x9,
      x10,
      y1,
      y2,
      y3,
      y4,
      y5,
      y6,
      y7,
      y8,
      y9,
      y10,
    ];
  } else if (shape === "circle") {
    var x1 = document.getElementById("x1");
    var y1 = document.getElementById("y1");
    var scale = document.getElementById("scale");

    var axises = [x1, y1, scale];
  } else if (shape === "star") {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x4");
    var x5 = document.getElementById("x5");
    var x6 = document.getElementById("x6");
    var x7 = document.getElementById("x7");
    var x8 = document.getElementById("x8");
    var x9 = document.getElementById("x9");
    var x10 = document.getElementById("x10");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var y5 = document.getElementById("y5");
    var y6 = document.getElementById("y6");
    var y7 = document.getElementById("y7");
    var y8 = document.getElementById("y8");
    var y9 = document.getElementById("y9");
    var y10 = document.getElementById("y10");

    var axises = [
      x1,
      x2,
      x3,
      x4,
      x5,
      x6,
      x7,
      x8,
      x9,
      x10,
      y1,
      y2,
      y3,
      y4,
      y5,
      y6,
      y7,
      y8,
      y9,
      y10,
    ];
  }

  for (let i = 0; i < axises.length; i++) {
    if (axises[i].classList.contains("active")) {
      axises[i].classList.remove("active");
    }
  }

  let inputnum = document.getElementById(cord);

  if (inputnum.classList.contains("active")) {
    inputnum.classList.remove("active");
  }

  let range = document.getElementById("all");
  inputnum.classList.add("active");

  let active = document.querySelector(".active");
  range.value = active.value;
}

function valueGive() {
  let range = document.getElementById("all");
  let active = document.querySelector(".active");
  active.value = range.value;
}

function rgba() {
  html_code = `
    <div class="linear-box">
        <div class="color-code"><input type="text" name="color-code" id="color-code" value="255, 255, 255, 1" disabled></div>
        <div class="limiter"><input oninput="RGBA()" type="range" value="255" min="0" max="255" name="red" id="red"></div>
        <div class="limiter"><input oninput="RGBA()" type="range" value="255" min="0" max="255" name="green" id="green"></div>
        <div class="limiter"><input oninput="RGBA()" type="range" value="255" min="0" max="255" name="blue" id="blue"></div>
        <div class="limiter"><input oninput="RGBA()" type="range" value="1" min="0" step="0.01" max="1" name="opacity" id="opacity"></div>
        <button onclick="copyrgba()" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <a href="https://github.com/Unstoppable-coder777" class="color-bg" id="showcolor">${svgicon().github
    }</a>`;
  localStorage.setItem("status", "rgba");
  document.getElementById("content").innerHTML = html_code;
}

function RGBA() {
  let red = document.getElementById("red").value;
  let blue = document.getElementById("blue").value;
  let green = document.getElementById("green").value;
  let opacity = document.getElementById("opacity").value;

  let show = document.getElementById("showcolor");

  let color = red + " , " + green + " , " + blue + " , " + opacity;

  document.getElementById("color-code").value = color;
  show.style.color = `rgba(${color})`;
}

function copyrgba() {
  let data = document.querySelector("#color-code").value;
  data = `rgba(${data});`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
}

function hsl() {
  html_code = `
    <div class="rgb-box">
        <div class="color-code"><input type="text" name="color-code" id="color-code" value="0 deg 0% 100%" disabled></div>
        <div class="limiter"><input oninput="HSL()" type="range" value="0" min="0" max="360" name="hue" id="hue"></div>
        <div class="limiter"><input oninput="HSL()" type="range" value="100" min="0" max="100" name="saturation" id="saturation"></div>
        <div class="limiter"><input oninput="HSL()" type="range" value="50" min="0" max="100" name="light" id="light"></div>
        <button onclick="copyhsl()" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <a href="https://github.com/Unstoppable-coder777" class="color-bg" id="showcolor">${svgicon().github
    }</a>`;
  localStorage.setItem("status", "hsl");
  document.getElementById("content").innerHTML = html_code;
}

HSL = () => {
  let hue = document.getElementById("hue").value;
  let saturation = document.getElementById("saturation").value;
  let light = document.getElementById("light").value;

  let show = document.getElementById("showcolor");

  let color = `${hue}deg ${saturation}% ${light}%`;

  document.getElementById("color-code").value = color;
  show.style.color = `hsl(${color})`;
  document.querySelector(
    "#saturation"
  ).style = `background:linear-gradient(90deg,#222,hsl(${color}));`;
  document.querySelector(
    "#light"
  ).style = `background:linear-gradient(90deg,#000,hsl(${color}));`;
};

copyhsl = () => {
  let data = document.querySelector("#color-code").value;
  data = `hsl(${data});`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
};

function hsla() {
  html_code = `
    <div class="linear-box">
        <div class="color-code"><input type="text" name="color-code" id="color-code" value="0deg, 0%, 100%, 1" disabled></div>
        <div class="limiter"><input oninput="HSLA()" type="range" value="0" min="0" max="360" name="hue" id="hue"></div>
        <div class="limiter"><input oninput="HSLA()" type="range" value="100" min="0" max="100" name="saturation" id="saturation"></div>
        <div class="limiter"><input oninput="HSLA()" type="range" value="50" min="0" max="100" name="light" id="light"></div>
        <div class="limiter"><input oninput="HSLA()" type="range" value="100" min="0" step="0.01" max="1" name="opacity" id="opacity"></div>
        <button onclick="copyhsla()" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <a href="https://github.com/Unstoppable-coder777" class="color-bg" id="showcolor">${svgicon().github
    }</a>`;
  localStorage.setItem("status", "hsla");
  document.getElementById("content").innerHTML = html_code;
}

HSLA = () => {
  let hue = document.getElementById("hue").value;
  let saturation = document.getElementById("saturation").value;
  let light = document.getElementById("light").value;
  let opacity = document.getElementById("opacity").value;

  let show = document.getElementById("showcolor");

  let color = `${hue}deg, ${saturation}%, ${light}%, ${opacity}`;

  document.getElementById("color-code").value = color;
  show.style.color = `hsla(${color})`;
  document.querySelector(
    "#saturation"
  ).style = `background:linear-gradient(90deg,#222,hsl(${color}));`;
  document.querySelector(
    "#light"
  ).style = `background:linear-gradient(90deg,#000,hsl(${color}));`;
};

copyhsla = () => {
  let data = document.querySelector("#color-code").value;
  data = `hsla(${data});`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
};

function hexcode() {
  html_code = `
    <div class="rgb-box">
        <div class="color-code"><input type="text" name="color-code" id="color-code" value="#ffffff" disabled></div>
        <div class="limiter"><input oninput="HEX()" type="range" value="255" min="0" max="255" name="red" id="red"></div>
        <div class="limiter"><input oninput="HEX()" type="range" value="255" min="0" max="255" name="green" id="green"></div>
        <div class="limiter"><input oninput="HEX()" type="range" value="255" min="0" max="255" name="blue" id="blue"></div>
        <button onclick="copyhexcode()" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <a href="https://github.com/Unstoppable-coder777" class="color-bg" id="showcolor">${svgicon().github
    }</a>`;
  localStorage.setItem("status", "hex");
  document.getElementById("content").innerHTML = html_code;
}

const codeTohex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbTohex = (r, g, b) => {
  return `#${codeTohex(r)}${codeTohex(g)}${codeTohex(b)}`;
};

HEX = () => {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;

  let show = document.getElementById("showcolor");

  let color = rgbTohex(parseInt(red), parseInt(green), parseInt(blue));

  document.getElementById("color-code").value = color;
  show.style.color = `${color}`;
};

copyhexcode = () => {
  let data = document.querySelector("#color-code").value;
  data = `${data}`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML = `${svgicon().copy}Copy`;
  }, 500);
};

function gradientper() {
  html_code = `
    <div class="linear-box">
        <div class="codes">
            <div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-1" value="255 , 255 , 255 100%" disabled></div>
            <div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-2" value="255 , 255 , 255 100%" disabled></div>
        </div>
        <div class="limiter"><select oninput="Linear_percentage()" name="option" id="option"><option oninput="Linear_percentage()" id="degree">45deg</option><option>to right</option><option>to left</option><option>to top</option><option>to bottom</option><option>to right top</option><option>to right bottom</option><option>to left top</option><option>to left bottom</option><option>to top right</option><option>to top left</option><option>to bottom right</option><option>to bottom left</option></select></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="0" min="0" max="360" id="l-deg"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="255" min="0" max="255" name="red" id="red"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="255" min="0" max="255" name="green" id="green"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="255" min="0" max="255" name="blue" id="blue"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="255" min="0" max="255" name="red" id="red-linear-2"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="255" min="0" max="255" name="green" id="green-linear-2"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="255" min="0" max="255" name="blue" id="blue-linear-2"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="50" min="0" max="100" name="red-2" id="red-2"></div>
        <div class="limiter"><input oninput="Linear_percentage()" type="range" value="50" min="0" max="100" name="green-2" id="green-2"></div>
        <button onclick="copyliper()" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }copy</button>
    </div>
    <div class="color-bg-1"><div id="showcolor"></div></div>`;
  localStorage.setItem("status", "gradientper");
  document.getElementById("content").innerHTML = html_code;
}

Linear_percentage = () => {
  let red = document.getElementById("red").value;
  let blue = document.getElementById("blue").value;
  let green = document.getElementById("green").value;
  let red1 = document.getElementById("red-linear-2").value;
  let blue1 = document.getElementById("blue-linear-2").value;
  let green1 = document.getElementById("green-linear-2").value;
  let red2 = document.getElementById("red-2").value;
  let green2 = document.getElementById("green-2").value;
  let ldeg = document.getElementById("l-deg").value;
  const dropdownValue = document.querySelector("#option");
  let degree = document.querySelector("#degree");

  degree.textContent = ldeg + "deg";

  let show = document.getElementById("showcolor");

  const color = red + " , " + green + " , " + blue;
  const color2 = red1 + " , " + green1 + " , " + blue1;

  document.getElementById("color-code-1").value = `${color} ${red2}%`;
  document.getElementById("color-code-2").value = `${color2} ${green2}%`;

  const data = `linear-gradient(${dropdownValue.value},rgb(${color}) ${red2}%,rgb(${color2}) ${green2}%)`;
  show.style.background = `${data}`;
};

copyliper = () => {
  let red = document.getElementById("red").value;
  let blue = document.getElementById("blue").value;
  let green = document.getElementById("green").value;
  let red1 = document.getElementById("red-linear-2").value;
  let blue1 = document.getElementById("blue-linear-2").value;
  let green1 = document.getElementById("green-linear-2").value;
  let red2 = document.getElementById("red-2").value;
  let green2 = document.getElementById("green-2").value;
  let ldeg = document.getElementById("l-deg").value;
  const dropdownValue = document.querySelector("#option");
  let degree = document.querySelector("#degree");

  degree.textContent = ldeg + "deg";

  const color = red + " , " + green + " , " + blue;
  const color2 = red1 + " , " + green1 + " , " + blue1;

  const data = `background-image:linear-gradient(${dropdownValue.value},rgb(${color}) ${red2}%,rgb(${color2}) ${green2}%);`;

  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"/><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>` +
      "Copy";
  }, 500);
};

function gradienttext() {
  html_code = `
    <div class="linear-box">
        <div class="codes">
            <div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-1" value="255 , 255 , 255" disabled></div>
            <div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-2" value="255 , 255 , 255" disabled></div>
        </div>
        <div class="limiter"><select oninput="Lineartext()" name="option" id="option"><option id="degree">45deg</option><option>to right</option><option>to left</option><option>to top</option><option>to bottom</option><option>to right top</option><option>to right bottom</option><option>to left top</option><option>to left bottom</option><option>to top right</option><option>to top left</option><option>to bottom right</option><option>to bottom left</option></select></div>
        <div class="limiter"><input oninput="Lineartext()" type="range" value="0" min="0" max="360" id="l-deg"></div>
        <div class="limiter"><input oninput="Lineartext()" type="range" value="255" min="0" max="255" name="red" id="red"></div>
        <div class="limiter"><input oninput="Lineartext()" type="range" value="255" min="0" max="255" name="green" id="green"></div>
        <div class="limiter"><input oninput="Lineartext()" type="range" value="255" min="0" max="255" name="blue" id="blue"></div>
        <div class="limiter"><input oninput="Lineartext()" type="range" value="255" min="0" max="255" name="red" id="red-linear"></div>
        <div class="limiter"><input oninput="Lineartext()" type="range" value="255" min="0" max="255" name="green" id="green-linear"></div>
        <div class="limiter"><input oninput="Lineartext()" type="range" value="255" min="0" max="255" name="blue" id="blue-linear"></div>
        <button onclick="copygtext()" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }copy</button>
    </div>
    <div class="color-bg-2" style="display: flex;align-items: center;justify-content: center;" id="showcolor"><h1>Github</h1></div>`;
  localStorage.setItem("status", "gradienttext");
  document.getElementById("content").innerHTML = html_code;
}

Lineartext = () => {
  let red = document.getElementById("red").value;
  let blue = document.getElementById("blue").value;
  let green = document.getElementById("green").value;
  let red1 = document.getElementById("red-linear").value;
  let blue1 = document.getElementById("blue-linear").value;
  let green1 = document.getElementById("green-linear").value;
  let ldeg = document.getElementById("l-deg").value;
  const dropdownValue = document.querySelector("#option");
  let degree = document.querySelector("#degree");

  degree.textContent = ldeg + "deg";

  let show = document.getElementById("showcolor");

  const color = red + " , " + green + " , " + blue;
  const color2 = red1 + " , " + green1 + " , " + blue1;

  document.getElementById("color-code-1").value = `${color}`;
  document.getElementById("color-code-2").value = `${color2}`;

  const data = `linear-gradient(${dropdownValue.value},rgb(${color}),rgb(${color2}))`;
  show.style.backgroundImage = `${data}`;
};

copygtext = () => {
  let ldeg = document.getElementById("l-deg").value;
  const dropdownValue = document.querySelector("#option");
  let degree = document.querySelector("#degree");

  degree.textContent = ldeg + "deg";

  const data1 = document.getElementById("color-code-1").value;
  const data2 = document.getElementById("color-code-2").value;

  let data = `background-image:linear-gradient(${dropdownValue.value},rgb(${data1}),rgb(${data2}));-webkit-background-clip: text;background-clip: text;color: transparent;`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"/><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>` +
      "Copy";
  }, 500);
};

function fullblob() {
  html_code = `
    <div class="linear-box">
        <div class="codes">
            <div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-3" value="0%  100%  0%  100%" disabled></div>
            <div class="color-code"><input type="text" name="color-code-linear" class="code-style" id="color-code-4" value="100%  0%  100%  0%" disabled></div>
        </div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="0" min="0" max="100" id="top"></div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="100" min="0" max="100" id="left"></div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="0" min="0" max="100" id="top2"></div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="0" min="0" max="100" id="right"></div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="100" min="0" max="100" id="bottom"></div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="0" min="0" max="100" id="right2"></div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="100" min="0" max="100" id="bottom2"></div>
        <div class="limiter"><input oninput="Fullblobcontrol()" type="range" value="0" min="0" max="100" id="left2"></div>
        <button onclick="copyfullblob()" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }copy</button>
    </div>
    <div class="color-bg-blob"><div id="showcolor-blob"></div></div>`;
  localStorage.setItem("status", "fullblob");
  document.getElementById("content").innerHTML = html_code;
}

Fullblobcontrol = () => {
  let top = document.getElementById("top").value;
  let bottom = document.getElementById("bottom").value;
  let left = document.getElementById("left").value;
  let right = document.getElementById("right").value;
  let top2 = document.getElementById("top2").value;
  let bottom2 = document.getElementById("bottom2").value;
  let left2 = document.getElementById("left2").value;
  let right2 = document.getElementById("right2").value;

  let show = document.getElementById("showcolor-blob");

  let border_radius_1 = `${top}%  ${top2}%  ${bottom2}%  ${bottom}%`;
  let border_radius_2 = `${left}%  ${right}%  ${right2}%  ${left2}%`;

  document.getElementById("color-code-3").value = `${border_radius_1}`;
  document.getElementById("color-code-4").value = `${border_radius_2}`;
  show.style.borderRadius = `${border_radius_1} / ${border_radius_2}`;
};

copyfullblob = () => {
  let data1 = document.querySelector("#color-code-3").value;
  let data2 = document.querySelector("#color-code-4").value;
  data = `border-radius:${data1} / ${data2};`;
  navigator.clipboard.writeText(data);

  btntext = document.getElementById("copy-btn");

  cool_words = ["awesome", "cool", "great", "superb"];

  const random_choice = Math.floor(Math.random() * cool_words.length);

  btntext.innerHTML = cool_words[random_choice];

  setTimeout(() => {
    btntext.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"/><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>` +
      "Copy";
  }, 500);
};

function clip__2() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('trapezoid','x1')" value="20" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('trapezoid','y1')" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" value="80" min="0" max="100" onclick="axis('trapezoid','x2')" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('trapezoid','y2')" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('trapezoid','x3')" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('trapezoid','y3')" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('trapezoid','x4')" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('trapezoid','y4')" id="y4"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Trapezoid()" value="20" min="0" max="100" id="all"></div>
        <button onclick="copyclip('trapezoid')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="trapezoid"></div></div>`;
  localStorage.setItem("status", "clip2");
  document.getElementById("content").innerHTML = html_code;
}

Trapezoid = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;

  let show = document.getElementById("trapezoid");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__3() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('parallelogram','x1')" value="25" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('parallelogram','y1')" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('parallelogram','x2')" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('parallelogram','y2')" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" value="75" min="0" max="100" onclick="axis('parallelogram','x3')" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('parallelogram','y3')" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('parallelogram','x4')" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('parallelogram','y4')" id="y4"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Parallelogram()" value="25" min="0" max="100" id="all"></div>
        <button onclick="copyclip('parallelogram')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="parallelogram"></div></div>
    `;
  localStorage.setItem("status", "clip3");
  document.getElementById("content").innerHTML = html_code;
}

Parallelogram = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;

  let show = document.getElementById("parallelogram");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__4() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('rhombus','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('rhombus','y1')" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('rhombus','x2')" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" value="50" min="0" max="100" onclick="axis('rhombus','y2')" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" value="50" min="0" max="100" onclick="axis('rhombus','x3')" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('rhombus','y3')" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('rhombus','x4')" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" value="50" min="0" max="100" onclick="axis('rhombus','y4')" id="y4"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Rhombus()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('rhombus')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="rhombus"></div></div>
    `;
  localStorage.setItem("status", "clip4");
  document.getElementById("content").innerHTML = html_code;
}

Rhombus = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;

  let show = document.getElementById("rhombus");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__5() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('pentagon','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" onclick="axis('pentagon','y1')" value="0" min="0" max="100" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" onclick="axis('pentagon','x2')" value="100" min="0" max="100" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" onclick="axis('pentagon','y2')" value="38" min="0" max="100" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" onclick="axis('pentagon','x3')" value="82" min="0" max="100" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" onclick="axis('pentagon','y3')" value="100" min="0" max="100" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" onclick="axis('pentagon','x4')" value="18" min="0" max="100" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" onclick="axis('pentagon','y4')" value="100" min="0" max="100" id="y4"></div>
            <div class="limiter"><label style="color: #fff;">x5:</label><input readonly type="number" onclick="axis('pentagon','x5')" value="0" min="0" max="100" id="x5"></div>
            <div class="limiter"><label style="color: #fff;">y5:</label><input readonly type="number" onclick="axis('pentagon','y5')" value="38" min="0" max="100" id="y5"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Pentagon()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('pentagon')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="pentagon"></div></div>`;
  localStorage.setItem("status", "clip5");
  document.getElementById("content").innerHTML = html_code;
}
Pentagon = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let x5 = document.getElementById("x5").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;
  let y5 = document.getElementById("y5").value;

  let show = document.getElementById("pentagon");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__6() {
  html_code = `
    <div class="linear-box">
        <div class="grid">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('hexagon','x1')" value="25" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('hexagon','y1')" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" value="75" min="0" max="100" onclick="axis('hexagon','x2')" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('hexagon','y2')" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('hexagon','x3')" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" value="50" min="0" max="100" onclick="axis('hexagon','y3')" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" value="75" min="0" max="100" onclick="axis('hexagon','x4')" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('hexagon','y4')" id="y4"></div>
            <div class="limiter"><label style="color: #fff;">x5:</label><input readonly type="number" value="25" min="0" max="100" onclick="axis('hexagon','x5')" id="x5"></div>
            <div class="limiter"><label style="color: #fff;">y5:</label><input readonly type="number" value="100" min="0" max="100" onclick="axis('hexagon','y5')" id="y5"></div>
            <div class="limiter"><label style="color: #fff;">x6:</label><input readonly type="number" value="0" min="0" max="100" onclick="axis('hexagon','x6')" id="x6"></div>
            <div class="limiter"><label style="color: #fff;">y6:</label><input readonly type="number" value="50" min="0" max="100" onclick="axis('hexagon','y6')" id="y6"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Hexagon()" value="25" min="0" max="100" id="all"></div>
        <button onclick="copyclip('hexagon')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="hexagon"></div></div>
    `;
  localStorage.setItem("status", "clip6");
  document.getElementById("content").innerHTML = html_code;
}

Hexagon = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let x5 = document.getElementById("x5").value;
  let x6 = document.getElementById("x6").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;
  let y5 = document.getElementById("y5").value;
  let y6 = document.getElementById("y6").value;

  let show = document.getElementById("hexagon");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%`;
  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__7() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('heptagon','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" onclick="axis('heptagon','y1')" value="0" min="0" max="100" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" onclick="axis('heptagon','x2')" value="90" min="0" max="100" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" onclick="axis('heptagon','y2')" value="20" min="0" max="100" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" onclick="axis('heptagon','x3')" value="100" min="0" max="100" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" onclick="axis('heptagon','y3')" value="60" min="0" max="100" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" onclick="axis('heptagon','x4')" value="75" min="0" max="100" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" onclick="axis('heptagon','y4')" value="100" min="0" max="100" id="y4"></div>
            <div class="limiter"><label style="color: #fff;">x5:</label><input readonly type="number" onclick="axis('heptagon','x5')" value="25" min="0" max="100" id="x5"></div>
            <div class="limiter"><label style="color: #fff;">y5:</label><input readonly type="number" onclick="axis('heptagon','y5')" value="100" min="0" max="100" id="y5"></div>
            <div class="limiter"><label style="color: #fff;">x6:</label><input readonly type="number" onclick="axis('heptagon','x6')" value="0" min="0" max="100" id="x6"></div>
            <div class="limiter"><label style="color: #fff;">y6:</label><input readonly type="number" onclick="axis('heptagon','y6')" value="60" min="0" max="100" id="y6"></div>
            <div class="limiter"><label style="color: #fff;">x7:</label><input readonly type="number" onclick="axis('heptagon','x7')" value="10" min="0" max="100" id="x7"></div>
            <div class="limiter"><label style="color: #fff;">y7:</label><input readonly type="number" onclick="axis('heptagon','y7')" value="20" min="0" max="100" id="y7"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Heptagon()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('heptagon')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="heptagon"></div></div>`;
  localStorage.setItem("status", "clip7");
  document.getElementById("content").innerHTML = html_code;
}

Heptagon = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let x5 = document.getElementById("x5").value;
  let x6 = document.getElementById("x6").value;
  let x7 = document.getElementById("x7").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;
  let y5 = document.getElementById("y5").value;
  let y6 = document.getElementById("y6").value;
  let y7 = document.getElementById("y7").value;

  let show = document.getElementById("heptagon");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__8() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('octagon','x1')" value="30" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" onclick="axis('octagon','y1')" value="0" min="0" max="100" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" onclick="axis('octagon','x2')" value="70" min="0" max="100" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" onclick="axis('octagon','y2')" value="0" min="0" max="100" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" onclick="axis('octagon','x3')" value="100" min="0" max="100" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" onclick="axis('octagon','y3')" value="30" min="0" max="100" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" onclick="axis('octagon','x4')" value="100" min="0" max="100" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" onclick="axis('octagon','y4')" value="70" min="0" max="100" id="y4"></div>
            <div class="limiter"><label style="color: #fff;">x5:</label><input readonly type="number" onclick="axis('octagon','x5')" value="70" min="0" max="100" id="x5"></div>
            <div class="limiter"><label style="color: #fff;">y5:</label><input readonly type="number" onclick="axis('octagon','y5')" value="100" min="0" max="100" id="y5"></div>
            <div class="limiter"><label style="color: #fff;">x6:</label><input readonly type="number" onclick="axis('octagon','x6')" value="30" min="0" max="100" id="x6"></div>
            <div class="limiter"><label style="color: #fff;">y6:</label><input readonly type="number" onclick="axis('octagon','y6')" value="100" min="0" max="100" id="y6"></div>
            <div class="limiter"><label style="color: #fff;">x7:</label><input readonly type="number" onclick="axis('octagon','x7')" value="0" min="0" max="100" id="x7"></div>
            <div class="limiter"><label style="color: #fff;">y7:</label><input readonly type="number" onclick="axis('octagon','y7')" value="70" min="0" max="100" id="y7"></div>
            <div class="limiter"><label style="color: #fff;">x8:</label><input readonly type="number" onclick="axis('octagon','x8')" value="0" min="0" max="100" id="x8"></div>
            <div class="limiter"><label style="color: #fff;">y8:</label><input readonly type="number" onclick="axis('octagon','y8')" value="30" min="0" max="100" id="y8"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Octagon()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('octagon')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="octagon"></div></div>`;
  localStorage.setItem("status", "clip8");
  document.getElementById("content").innerHTML = html_code;
}

Octagon = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let x5 = document.getElementById("x5").value;
  let x6 = document.getElementById("x6").value;
  let x7 = document.getElementById("x7").value;
  let x8 = document.getElementById("x8").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;
  let y5 = document.getElementById("y5").value;
  let y6 = document.getElementById("y6").value;
  let y7 = document.getElementById("y7").value;
  let y8 = document.getElementById("y8").value;

  let show = document.getElementById("octagon");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__9() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('nonagon','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" onclick="axis('nonagon','y1')" value="0" min="0" max="100" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" onclick="axis('nonagon','x2')" value="83" min="0" max="100" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" onclick="axis('nonagon','y2')" value="12" min="0" max="100" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" onclick="axis('nonagon','x3')" value="100" min="0" max="100" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" onclick="axis('nonagon','y3')" value="43" min="0" max="100" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" onclick="axis('nonagon','x4')" value="94" min="0" max="100" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" onclick="axis('nonagon','y4')" value="78" min="0" max="100" id="y4"></div>
            <div class="limiter"><label style="color: #fff;">x5:</label><input readonly type="number" onclick="axis('nonagon','x5')" value="68" min="0" max="100" id="x5"></div>
            <div class="limiter"><label style="color: #fff;">y5:</label><input readonly type="number" onclick="axis('nonagon','y5')" value="100" min="0" max="100" id="y5"></div>
            <div class="limiter"><label style="color: #fff;">x6:</label><input readonly type="number" onclick="axis('nonagon','x6')" value="32" min="0" max="100" id="x6"></div>
            <div class="limiter"><label style="color: #fff;">y6:</label><input readonly type="number" onclick="axis('nonagon','y6')" value="100" min="0" max="100" id="y6"></div>
            <div class="limiter"><label style="color: #fff;">x7:</label><input readonly type="number" onclick="axis('nonagon','x7')" value="6" min="0" max="100" id="x7"></div>
            <div class="limiter"><label style="color: #fff;">y7:</label><input readonly type="number" onclick="axis('nonagon','y7')" value="78" min="0" max="100" id="y7"></div>
            <div class="limiter"><label style="color: #fff;">x8:</label><input readonly type="number" onclick="axis('nonagon','x8')" value="0" min="0" max="100" id="x8"></div>
            <div class="limiter"><label style="color: #fff;">y8:</label><input readonly type="number" onclick="axis('nonagon','y8')" value="43" min="0" max="100" id="y8"></div>
            <div class="limiter"><label style="color: #fff;">x9:</label><input readonly type="number" onclick="axis('nonagon','x9')" value="17" min="0" max="100" id="x9"></div>
            <div class="limiter"><label style="color: #fff;">y9:</label><input readonly type="number" onclick="axis('nonagon','y9')" value="12" min="0" max="100" id="y9"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Nonagon()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('nonagon')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="nonagon"></div></div>`;
  localStorage.setItem("status", "clip9");
  document.getElementById("content").innerHTML = html_code;
}

Nonagon = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let x5 = document.getElementById("x5").value;
  let x6 = document.getElementById("x6").value;
  let x7 = document.getElementById("x7").value;
  let x8 = document.getElementById("x8").value;
  let x9 = document.getElementById("x9").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;
  let y5 = document.getElementById("y5").value;
  let y6 = document.getElementById("y6").value;
  let y7 = document.getElementById("y7").value;
  let y8 = document.getElementById("y8").value;
  let y9 = document.getElementById("y9").value;

  let show = document.getElementById("nonagon");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%,${x9}% ${y9}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__10() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('decagon','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" onclick="axis('decagon','y1')" value="0" min="0" max="100" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" onclick="axis('decagon','x2')" value="80" min="0" max="100" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" onclick="axis('decagon','y2')" value="10" min="0" max="100" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" onclick="axis('decagon','x3')" value="100" min="0" max="100" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" onclick="axis('decagon','y3')" value="35" min="0" max="100" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" onclick="axis('decagon','x4')" value="100" min="0" max="100" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" onclick="axis('decagon','y4')" value="70" min="0" max="100" id="y4"></div>
            <div class="limiter"><label style="color: #fff;">x5:</label><input readonly type="number" onclick="axis('decagon','x5')" value="80" min="0" max="100" id="x5"></div>
            <div class="limiter"><label style="color: #fff;">y5:</label><input readonly type="number" onclick="axis('decagon','y5')" value="90" min="0" max="100" id="y5"></div>
            <div class="limiter"><label style="color: #fff;">x6:</label><input readonly type="number" onclick="axis('decagon','x6')" value="50" min="0" max="100" id="x6"></div>
            <div class="limiter"><label style="color: #fff;">y6:</label><input readonly type="number" onclick="axis('decagon','y6')" value="100" min="0" max="100" id="y6"></div>
            <div class="limiter"><label style="color: #fff;">x7:</label><input readonly type="number" onclick="axis('decagon','x7')" value="20" min="0" max="100" id="x7"></div>
            <div class="limiter"><label style="color: #fff;">y7:</label><input readonly type="number" onclick="axis('decagon','y7')" value="90" min="0" max="100" id="y7"></div>
            <div class="limiter"><label style="color: #fff;">x8:</label><input readonly type="number" onclick="axis('decagon','x8')" value="0" min="0" max="100" id="x8"></div>
            <div class="limiter"><label style="color: #fff;">y8:</label><input readonly type="number" onclick="axis('decagon','y8')" value="70" min="0" max="100" id="y8"></div>
            <div class="limiter"><label style="color: #fff;">x9:</label><input readonly type="number" onclick="axis('decagon','x9')" value="0" min="0" max="100" id="x9"></div>
            <div class="limiter"><label style="color: #fff;">y9:</label><input readonly type="number" onclick="axis('decagon','y9')" value="35" min="0" max="100" id="y9"></div>
            <div class="limiter"><label style="color: #fff;">x10:</label><input readonly type="number" onclick="axis('decagon','x10')" value="20" min="0" max="100" id="x10"></div>
            <div class="limiter"><label style="color: #fff;">y10:</label><input readonly type="number" onclick="axis('decagon','y10')" value="10" min="0" max="100" id="y10"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Decagon()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('decagon')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="decagon"></div></div>`;
  localStorage.setItem("status", "clip10");
  document.getElementById("content").innerHTML = html_code;
}

Decagon = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let x5 = document.getElementById("x5").value;
  let x6 = document.getElementById("x6").value;
  let x7 = document.getElementById("x7").value;
  let x8 = document.getElementById("x8").value;
  let x9 = document.getElementById("x9").value;
  let x10 = document.getElementById("x10").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;
  let y5 = document.getElementById("y5").value;
  let y6 = document.getElementById("y6").value;
  let y7 = document.getElementById("y7").value;
  let y8 = document.getElementById("y8").value;
  let y9 = document.getElementById("y9").value;
  let y10 = document.getElementById("y10").value;

  let show = document.getElementById("decagon");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%,${x9}% ${y9}%,${x10}% ${y10}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};

function clip__11() {
  html_code = `
    <div class="linear-box">
        <div class="grid">
            <div class="limiter"><label style="color: #fff;">x:</label><input readonly type="number" class="active" onclick="axis('circle','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y:</label><input readonly type="number" onclick="axis('circle','y1')" value="50" min="0" max="100" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">Scale:</label><input readonly type="number" onclick="axis('circle','scale')" value="50" min="0" max="100" id="scale"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Circle()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('circle')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="circle"></div></div>`;
  localStorage.setItem("status", "clip11");
  document.getElementById("content").innerHTML = html_code;
}

Circle = () => {
  let x1 = document.getElementById("x1").value;
  let y1 = document.getElementById("y1").value;
  let scale = document.getElementById("scale").value;

  let show = document.getElementById("circle");
  cordinates = `${scale}% at ${x1}% ${y1}%`;

  show.style.clipPath = `circle(${cordinates})`;
};

function clip__12() {
  html_code = `
    <div class="linear-box">
        <div class="grid-2">
            <div class="limiter"><label style="color: #fff;">x1:</label><input readonly type="number" class="active" onclick="axis('star','x1')" value="50" min="0" max="100" id="x1"></div>
            <div class="limiter"><label style="color: #fff;">y1:</label><input readonly type="number" onclick="axis('star','y1')" value="0" min="0" max="100" id="y1"></div>
            <div class="limiter"><label style="color: #fff;">x2:</label><input readonly type="number" onclick="axis('star','x2')" value="61" min="0" max="100" id="x2"></div>
            <div class="limiter"><label style="color: #fff;">y2:</label><input readonly type="number" onclick="axis('star','y2')" value="35" min="0" max="100" id="y2"></div>
            <div class="limiter"><label style="color: #fff;">x3:</label><input readonly type="number" onclick="axis('star','x3')" value="98" min="0" max="100" id="x3"></div>
            <div class="limiter"><label style="color: #fff;">y3:</label><input readonly type="number" onclick="axis('star','y3')" value="35" min="0" max="100" id="y3"></div>
            <div class="limiter"><label style="color: #fff;">x4:</label><input readonly type="number" onclick="axis('star','x4')" value="68" min="0" max="100" id="x4"></div>
            <div class="limiter"><label style="color: #fff;">y4:</label><input readonly type="number" onclick="axis('star','y4')" value="57" min="0" max="100" id="y4"></div>
            <div class="limiter"><label style="color: #fff;">x5:</label><input readonly type="number" onclick="axis('star','x5')" value="79" min="0" max="100" id="x5"></div>
            <div class="limiter"><label style="color: #fff;">y5:</label><input readonly type="number" onclick="axis('star','y5')" value="91" min="0" max="100" id="y5"></div>
            <div class="limiter"><label style="color: #fff;">x6:</label><input readonly type="number" onclick="axis('star','x6')" value="50" min="0" max="100" id="x6"></div>
            <div class="limiter"><label style="color: #fff;">y6:</label><input readonly type="number" onclick="axis('star','y6')" value="70" min="0" max="100" id="y6"></div>
            <div class="limiter"><label style="color: #fff;">x7:</label><input readonly type="number" onclick="axis('star','x7')" value="21" min="0" max="100" id="x7"></div>
            <div class="limiter"><label style="color: #fff;">y7:</label><input readonly type="number" onclick="axis('star','y7')" value="91" min="0" max="100" id="y7"></div>
            <div class="limiter"><label style="color: #fff;">x8:</label><input readonly type="number" onclick="axis('star','x8')" value="32" min="0" max="100" id="x8"></div>
            <div class="limiter"><label style="color: #fff;">y8:</label><input readonly type="number" onclick="axis('star','y8')" value="57" min="0" max="100" id="y8"></div>
            <div class="limiter"><label style="color: #fff;">x9:</label><input readonly type="number" onclick="axis('star','x9')" value="2" min="0" max="100" id="x9"></div>
            <div class="limiter"><label style="color: #fff;">y9:</label><input readonly type="number" onclick="axis('star','y9')" value="35" min="0" max="100" id="y9"></div>
            <div class="limiter"><label style="color: #fff;">x10:</label><input readonly type="number" onclick="axis('star','x10')" value="39" min="0" max="100" id="x10"></div>
            <div class="limiter"><label style="color: #fff;">y10:</label><input readonly type="number" onclick="axis('star','y10')" value="35" min="0" max="100" id="y10"></div>
        </div>
        <div class="limiter"><input type="range" oninput="valueGive(),Star()" value="50" min="0" max="100" id="all"></div>
        <button onclick="copyclip('star')" type="submit" class="custom-btn" id="copy-btn">${svgicon().copy
    }Copy</button>
    </div>
    <div class="color-bg-blob"><div id="star"></div></div>`;
  localStorage.setItem("status", "clip12");
  document.getElementById("content").innerHTML = html_code;
}

Star = () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let x4 = document.getElementById("x4").value;
  let x5 = document.getElementById("x5").value;
  let x6 = document.getElementById("x6").value;
  let x7 = document.getElementById("x7").value;
  let x8 = document.getElementById("x8").value;
  let x9 = document.getElementById("x9").value;
  let x10 = document.getElementById("x10").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  let y4 = document.getElementById("y4").value;
  let y5 = document.getElementById("y5").value;
  let y6 = document.getElementById("y6").value;
  let y7 = document.getElementById("y7").value;
  let y8 = document.getElementById("y8").value;
  let y9 = document.getElementById("y9").value;
  let y10 = document.getElementById("y10").value;

  let show = document.getElementById("star");
  cordinates = `${x1}% ${y1}%,${x2}% ${y2}%,${x3}% ${y3}%,${x4}% ${y4}%,${x5}% ${y5}%,${x6}% ${y6}%,${x7}% ${y7}%,${x8}% ${y8}%,${x9}% ${y9}%,${x10}% ${y10}%`;

  show.style.clipPath = `polygon(${cordinates})`;
};
