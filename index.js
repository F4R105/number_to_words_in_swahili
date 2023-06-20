function convertToWords(number){
    const Mamoja = ['','moja','mbili','tatu','nne','tano','sita','saba','nane','tisa']
    const Makumi = ['','kumi','ishirini','thelathini','arobaini','hamsini','sitini', 'sabini', 'themanini', 'tisini']

    console.log(number)
    namba = number.toString()
    noOfDigits = namba.length

    switch(noOfDigits){
        // mamoja
        case 1: 
            return `${Mamoja[namba[0]]}`; break;

        // makumi
        case 2: 
            if(namba[1]==0) return `${Makumi[namba[0]]}`
            return `${Makumi[namba[0]]} na ${Mamoja[namba[1]]}`

        // mamia
        case 3:
            if(namba[1]==0 && namba[2]==0) return `Mia ${Mamoja[namba[0]]}`
            if(namba[1]==0 && namba[2]!=0) return `Mia ${Mamoja[namba[0]]} na ${Mamoja[namba[2]]}`
            return `Mia ${Mamoja[namba[0]]} ${Makumi[namba[1]]} na ${Mamoja[namba[2]]}`

        // maelfu
        case 4:
            if(namba[1]==0 && namba[2]==0) return `Elfu ${Mamoja[namba[0]]} na ${Mamoja[namba[3]]}`
            if(namba[1]==0 && namba[2]!=0) return `Elfu ${Mamoja[namba[0]]} na ${Makumi[namba[2]]} na ${Mamoja[namba[3]]}`
            return `Elfu ${Mamoja[namba[0]]} Mia ${Mamoja[namba[1]]} ${Makumi[namba[2]]} na ${Mamoja[namba[3]]}`

        // makumi elfu
        case 5:
            if(namba[1]==0 && namba[2]==0 && namba[3]==0) return `${Makumi[namba[0]]} elfu, na ${Mamoja[namba[4]]}`
            if(namba[1]!=0 && namba[2]==0 && namba[3]==0) return `${Makumi[namba[0]]} na ${Mamoja[namba[1]]} elfu, na ${Mamoja[namba[4]]}`
            if(namba[1]==0 && namba[2]!=0 && namba[3]==0) return `Elfu ${Makumi[namba[0]]} na Mia ${Mamoja[namba[2]]} na ${Mamoja[namba[4]]}`
            if(namba[1]==0 && namba[2]==0) return `Elfu ${Makumi[namba[0]]} na ${Makumi[namba[3]]} na ${Mamoja[namba[4]]}`
            if(namba[1]==0 && namba[2]!=0) return `Elfu ${Makumi[namba[0]]} na Mia ${Mamoja[namba[2]]} ${Makumi[namba[3]]} na ${Mamoja[namba[4]]}`
            return `Elfu ${Makumi[namba[0]]} na ${Mamoja[namba[1]]} Mia ${Mamoja[namba[2]]} ${Makumi[namba[3]]} na ${Mamoja[namba[4]]}`
    }
}

const words = convertToWords(92008)
console.log(words)