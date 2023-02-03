console.log("test");

document.body.style.transform = 2;

const body = document.querySelector("#artDiv");

const rain = document.createElement('pre')

rain.setAttribute('id','rain');
rain.setAttribute('aria-hidden', 'true');

// #region innerHTML code (ascii art)
rain.innerHTML = 
 
`
                ⠀⠀⠀⠀⠀⠀⡸⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠛⡖⢆⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⢠⠃⠀⢣⠀⠀⠀⠀⠀⠀⠀⢀⢴⠇⠀⢱⢸⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⡜⠀⠀⠀⢇⠀⠀⠀⠀⠀⢐⣁⠎⠀⠀⠀⣿⠀⠀⠀⠀⢀⡠⠊
                ⠀⠀⠀⠀⢀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⢀⠔⠁⢀⣴
                ⠀⠀⠀⠀⡘⠀⢀⡠⡤⣀⠀⠀⠀⠀⠀⣀⠤⡤⢄⡀⠀⠀⡄⡠⠂⠀⣴⠟⠁
                ⠀⠀⠀⢠⠃⡰⠁⢠⡇⠈⢢⠀⠀⠀⡐⠁⢀⣿⠀⠑⡄⠀⢳⠁⢠⡾⠁⠀⠀
                ⠀⠀⢠⠇⢠⠃⠀⢸⣿⠀⠀⡇⠀⢰⠁⠀⢸⣿⠀⠀⢰⠀⢸⢠⡟⠀⠀⠀⢀
                ⠀⡰⠃⠀⠸⡄⠀⢸⣿⠀⠀⡇⠀⠘⡄⠀⠸⣿⠀⠀⣸⠃⠘⣿⣁⣀⠠⠔⠉
                ⢼⠀⠀⠀⠀⠘⠤⣈⣏⡠⠊⠀⠀⠀⠈⠢⢀⣇⠠⠖⠁⠀⠀⡗⠉⠀⠀⣀⠄
                ⠈⠲⢄⡀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠼⡣⠤⠐⠉⠀⠀
                ⠀⠀⠀⡌⠑⡢⣤⣀⣀⡀⠀⠀⠀⢀⣀⣀⣠⡤⢶⡶⠋⢁⡼⠇⠀⠀⠀⠀⠀
                ⠀⠀⠀⠃⠀⢣⠈⠳⣤⣀⠉⠉⠉⠉⢀⣀⡠⠔⠁⢠⠂⡴⠁⢸⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⢸⠀⠠⡈⠑⠊⠭⢙⡻⠟⠋⠀⢀⠔⢁⠜⠀⠀⠀⢃⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⢆⠀⠈⠓⠒⠈⠁⠀⠀⢀⠔⠁⡠⠊⠀⠀⠀⠀⢸⡀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀⠠⠊⠁⣠⡎⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⢸⠈⢆⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⡆⠀⠑⢤⣀⢴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⢡⠀⠀⠘⡀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀


                ⠀⠀⠀⠀⠀⠀⢀⡤⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⢀⣴⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⢀⣴⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⢀⣾⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⣼⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⢰⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⢸⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⢸⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⢸⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⢿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠃
                ⠀⠘⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⠏⠀
                ⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣤⣀⣀⣀⣀⣀⣀⣠⣤⣶⣿⣿⣿⠋⠀⠀
                ⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀
                ⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠿⠿⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀




                        start >:) -->
                .--.--.--.--.--.--.--.  .--.--.--.--.--.--.--.
                |                    |        |     |     |  |
                :  :--:  :--:--:--:--:  :--:  :  :  :  :  :  :
                |     |     |              |     |     |  |  |
                :--:  :--:  :  :--:--:--:  :--:--:--:  :  :  :
                |     |     |     |     |           |  |  |  |
                :--:--:  :--:  :--:  :  :--:--:  :  :  :  :  :
                |        |     |     |           |  |  |     |
                :  :--:--:  :--:  :  :--:  :--:--:  :  :--:--:
                |           |     |     |  |     |  |  |     |
                :--:--:--:--:  :--:--:  :--:  :--:  :  :  :  :
                |           |  |     |     |     |  |     |  |
                :  :  :  :--:  :  :  :--:  :--:  :  :--:--:  :
                |  |  |     |  |  |     |        |     |  |  |
                :  :  :--:  :  :  :--:  :--:--:--:--:  :  :  :
                |  |     |           |  |           |  |     |
                :--:--:  :--:--:--:  :--:  :--:--:  :  :--:--:
                |     |  |     |           |     |  |  |     |
                :  :  :--:  :  :  :--:--:--:  :  :  :  :  :  :
                |  |  |     |  |           |  |  |  |     |  |
                :  :  :  :--:--:  :--:--:  :  :  :--:--:--:  :
                |  |  |  |     |     |     |  |        |     |
                :  :  :  :  :  :--:  :  :--:--:  :--:  :  :--:
                |  |     |  |  |     |        |     |  |     |
                :  :--:--:  :  :--:--:--:--:  :  :  :--:--:  :
                |        |  |     |     |     |  |  |     |  |
                :  :--:  :  :--:  :  :  :  :--:--:  :  :  :  :
                |  |     |  |     |  |     |     |  |  |  |  |
                :  :  :--:  :  :--:  :--:--:  :  :  :  :--:  :
                |  |     |  |  |              |     |     |  |
                :  :  :--:  :--:  :--:--:--:--:  :--:  :  :  :
                |  |     |        |           |     |  |     |
                :  :--:  :--:--:--:  :--:--:  :--:  :--:--:--:
                |  |     |           |        |  |           |
                :  :  :--:--:--:--:  :  :--:--:  :  :--:--:  :
                |  |     |     |     |  |     |     |     |  |
                :  :--:  :  :  :  :--:  :  :--:  :--:  :  :--:
                |  |     |  |  |     |     |     |     |     |
                :  :--:--:  :  :  :  :--:--:  :--:  :--:--:  :
                |  |        |  |  |  |     |  |        |     |
                :  :  :  :--:  :  :  :  :  :  :--:--:  :  :--:
                |     |     |  |  |  |  |  |           |  |  |
                :  :--:--:  :  :  :  :  :--:  :--:--:--:  :  :
                |     |     |     |  |  |     |        |  |  |
                :--:--:  :--:--:  :--:  :  :  :  :--:  :  :  :
                |        |     |  |     |  |  |     |  |  |  |
                :  :--:--:  :--:  :  :--:  :  :  :  :--:  :  :
                |        |     |  |        |  |  |     |  |  |
                :--:--:  :  :  :  :--:--:--:--:  :  :  :  :  :
                |     |  |  |  |     |     |     |  |  |     |
                :  :  :  :--:  :  :--:  :  :  :  :--:  :  :--:
                |  |           |        |     |  |           |
                :--:--:--:--:--:--:--:--:--:--:--:  :--:--:--:
                                                --> end :)
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠿⠋⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⠉⠀⠀⠀⠀⣠⣴⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣄⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣤⣤⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⠋⣠⣦⣟⣻⣦⣼⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢶⠒⠛⠉⠉⠀⠀⠀⠀⠀⣹⣿⣿⣿⣦⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⠀⡏⠿⣎⣿⠏⠹⠟⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⣶⣤⠀⠈⠃⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣷⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⡆⠛⠷⠟⢻⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣀⡠⠜⠛⠛⢯⣙⠿⣿⣷⣄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⡿⠃⠀⠀⡀⠀⣠⠴⠊⠁⠀⠀⠀⠀⠀⠈⠓⢽⣿⣿⣷
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⠘⢿⣿⣿⣿⣷⣆⠀⠀⠀⠀⠀⠀⠈⠻⢿⠿⠛⠡⣄⠀⢠⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡀⠀⠀⠀⠀⠀⠸⣿⣤⣤⡀⠀⠀⠀⣤⣲⣖⠢⡀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⣀⣤⢄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⡀⠀⠀⠀⠀⠈⠉⠻⣿⣤⣤⣿⣶⠆⣩⠿⠅⠀⠀⡜⠁⠀⠀⠀⢀⡤⠖⠋⠀⣾⠈⣧⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⠀⠑⠦⢀⠀⠀⠀⠀⠙⠻⣋⣩⣭⣶⣞⠋⠀⢀⡞⠀⠀⠀⣠⠖⠉⠀⠀⠀⠀⢻⡀⢸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⠀⠀⠀⠀⠀⠀⠀⠐⢲⡤⠀⠈⠉⠉⠁⣀⡠⠴⠋⠀⠀⡠⠎⠁⠀⢀⡠⠄⠀⠀⠸⡀⢸⠄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢙⡏⠉⠉⠉⠁⠀⠀⠀⣠⠞⠁⢀⣤⠞⣉⠄⠀⢀⡠⢔⡳⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⢰⠁⠀⠀⠛⠐⠋⣀⠤⣒⡭⠒⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⠀⠀⠀⠀⠈⢦⡀⠀⢠⠴⠟⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⠁⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⣾⣇⠀⠀⠀⠀⠈⢷⠀⠀⢀⡴⠋⠀⠀⠈⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⢸⡗⠀⠀⠀⠸⣿⠀⠀⠀⠀⠀⠀⢧⠀⢏⠀⠈⢳⡶⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⣳⠄⠀⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⡞⢁⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠻⣗⣒⠒⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠓⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣠⠤⠖⠛⣛⡻⢶⣄⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⢠⣤⣤⣄⣀⣀⣈⣱⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠉⠉⠉⠉⠉⠗⠚⠹⣤⡖⠊⠉⠻⠿⠋⠑⢦⣄⣴⠿⣽⣿⠒⠲⣤⣤⣀⣈⡷⠤⠤⠵⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
` 
;
// #endregion

body.appendChild(rain);

const today = new Date();

let thisYear = today.getFullYear();

console.log(thisYear);

const footer = document.querySelector("#footer");

const copyright = document.createElement("p");


copyright.setAttribute('id','copyright');

copyright.innerText = "Natalie Petrolino (aka vsspnkr) " + thisYear + " ฅ^._.^ฅ";

footer.appendChild(copyright);


window.addEventListener("load", function() {
    
    let catblink = document.getElementById('copyright');
    
    setInterval(function() {
        
        catblink.innerText = (catblink.innerText == 'Natalie Petrolino (aka vsspnkr) ' + thisYear + ' ฅ^._.^ฅ' ? 'Natalie Petrolino (aka vsspnkr) ' + thisYear + ' ฅ^u_u^ฅ' : 'Natalie Petrolino (aka vsspnkr) ' + thisYear + ' ฅ^._.^ฅ');

    }, 1000);

}, false);


const skills = ["beginner coding", "creative writing", "essay writing", "music production",
"video editing and production", "dlsr photography and videography" ];

const skillsSection = document.querySelector("#skills");

const skillsList = document.querySelector("#ul"); 

for (let i=0; i < skills.length; i++) {

    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);

}

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");


const messageForm = document.querySelector('#form')

const messageSection = document.querySelector("#messages");

let messageCounter = 0 

messageSection.style.display = "none";

messageForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    messageSection.style.display = "block";

    messageCounter++;
        
    const messageList = document.querySelector("#messageslist");

    const newMessage = document.createElement("li");

    newMessage.setAttribute('id', 'newmessage');
    
    newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a><span> ${message.value} </span>`

    messageList.appendChild(newMessage);

    const removeButton = document.createElement("button");

    removeButton.innerText = "remove";

    removeButton.setAttribute('type','button');

    newMessage.appendChild(removeButton);

    removeButton.addEventListener('click', (event) => {
        
        messageCounter--;
        
        messageList.removeChild(newMessage);
       
        console.log(messageCounter);

        if (messageCounter === 0) {

            messageSection.style.display = "none";
    
        }

    });
    
    console.log(messageCounter);

    document.querySelector('#form').reset();
    
});

fetch('https://api.github.com/users/vsspnkkvr/repos', {mode: 'cors'})
    
    .then(function(response) {
        
        return response.json();

    })

    .then(function(response) {

        let repos = response;

        renderHTML(repos);
    
    })
    
    .catch(function(err) {
        
        console.log('Error: failed to fetch github json data');

});

function renderHTML(repos) {

    let projectSection = document.querySelector("#projects");

    let projectList = projectSection.querySelector("#ul2");

    for (let i=0; i < repos.length; i++) {

        const project = document.createElement("li");

        project.innerHTML = `<a href="${repos[i].clone_url}">${repos[i].name}</a>`

        projectList.appendChild(project);

    }

}