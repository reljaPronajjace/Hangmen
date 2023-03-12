        let a = 0;
        let pokusaj = 6;
        let smth = 0;
        let uSlova = 0;
        let brojac = 0;
        let count = 0;
        const canvas = document.getElementById("canvas");
        pokusaj = parseInt(pokusaj);
        uSlova = parseInt(uSlova);
        brojac = parseInt(brojac);
        count = parseInt(count);


        function novaIgra(){
            alert("Pocinje nova igra :)");

        }
      /*Funkcija za dodavanje linija po broju slova*/
        function pokreni(){

            pokusaj = 6;
            smth = 0;
            let slova = document.getElementById("slova").value;

            for (let index = 0; index < slova.length; index++) {
                if(slova[index] === " ")
                    document.getElementById("p1").innerHTML += `<span id=${index} style="color: transparent;">0</span>`; 
                else
                document.getElementById("p1").innerHTML += `<span id=${index}>_ </span>`; 
            }
            let div = document.getElementById("pocetak");
            div.style.display = 'none';

            if(a === 0){
                this.tastatura();
            }
            brisanjeKlase();

            let kraj = document.getElementById("kraj");
                kraj.style.display = 'block';
                a++;
            

        }
        let niz = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

        /*Funkcija za dodavanje tastature*/
        function tastatura(){
            let t = document.getElementById("tastaturce");
            for (let index = 0; index < niz.length; index++) {
                t.innerHTML += `<button class="tastSlovo" id="${niz[index]}" onclick="slovo(this)"> ${niz[index]} </button>`;
                if(niz[index] === 'p')
                    t.innerHTML += "<br>"
                if(niz[index] === 'l')
                    t.innerHTML += "<br>"
            }
        }
        /*Funkcija za pogadjanje*/
        function brisanjeKlase(){
            let t = document.getElementById("tastaturce");
            let trButton;
            for (let index = 0; index < niz.length; index++) {
                trButton = document.getElementById(`${niz[index]}`);
                trButton.disabled = false;
            }

        }
        
        function slovo(trButton){

            uSlova = document.getElementById("slova").value;
            let trSlovo = trButton.id;
            trButton.disabled = true;
            let rec = document.getElementById("slova").value;
            let textP = document.getElementById("p1");
            for (let index = 0; index < rec.length; index++) {
                if(trSlovo === rec[index])
                {   
                    let tr = document.getElementById(`${index}`);
                    tr.innerHTML = trSlovo;
                    smth++;
                    brojac++;
                    console.log(brojac);
                    console.log(uSlova.length);

                }
            }
            if(smth!= 0)
                smth = 0;
            else{
                count++;
                pokusaj--;
                let {initialDrawing} = canvasCreator();
                initialDrawing();
                drawMan(count);
            }
            
            if(pokusaj === 0)
                {
                    alert("Izgubili ste :(");

                    setTimeout(function () {
                    let kraj = document.getElementById("kraj");
                    kraj.style.display = 'none';
                    let poruka = document.getElementById("porukaPoraz");
                    poruka.style.display = 'block';


                    setTimeout(function () {
                    let pocetak = document.getElementById("pocetak")
                    pocetak.style.display = 'block'
                    poruka.style.display = 'none'
                    }, 1500)
                    

                    let textP = document.getElementById("p1");
                    textP.innerHTML = " ";
                    document.getElementById("slova").value = "";

                    setTimeout(function(){location.reload()},1500)
                },1000)


                }
                
                if(brojac === uSlova.length){

                    alert("Pobedili ste :)");
                    
                    let kraj = document.getElementById("kraj");
                    kraj.style.display = 'none';
                    let poruka = document.getElementById("porukaPobeda");
                    poruka.style.display = 'block';


                    setTimeout(function () {
                    let pocetak = document.getElementById("pocetak")
                    pocetak.style.display = 'block'
                    poruka.style.display = 'none'
                    }, 1250)
                    

                    let textP = document.getElementById("p1");
                    textP.innerHTML = " ";
                    document.getElementById("slova").value = "";

                    setTimeout(function(){location.reload()},1000)

                }
            

        }

            //Canvas
    const canvasCreator = () => {
        let context = canvas.getContext("2d");
        context.beginPath();
        context.strokeStyle = "#000";
        context.lineWidth = 2;
        //For drawing lines
        const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
        };
        const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
        };
        const body = () => {
        drawLine(70, 40, 70, 80);
        };
        const leftArm = () => {
        drawLine(70, 50, 50, 70);
        };
        const rightArm = () => {
        drawLine(70, 50, 90, 70);
        };
        const leftLeg = () => {
        drawLine(70, 80, 50, 110);
        };
        const rightLeg = () => {
        drawLine(70, 80, 90, 110);
        };
        //initial frame
        const initialDrawing = () => {
        //clear canvas
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //bottom line
        drawLine(10, 130, 130, 130);
        //left line
        drawLine(10, 10, 10, 131);
        //top line
        drawLine(10, 10, 70, 10);
        //small top line
        drawLine(70, 10, 70, 20);
        };
        return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
    };
    //draw the man
    const drawMan = (count) => {
        let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
        switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
        }
    };
