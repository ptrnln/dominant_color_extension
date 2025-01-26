

/**
 * @type {import('@types/chrome')}
*/


(async () => {
    const {default: html2canvas} = await import("html2canvas");
    console.log(html2canvas);
    document.addEventListener("DOMContentLoaded", async (e) => {
        e.preventDefault();

        var getDominantColor = async () => {
            const canvas = await html2canvas(document.body);
    
            const context = canvas.getContext("2d");
    
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    
            const data = imageData.data
    
            let mostCommon;
    
            for(let i = 0, mostOccurances: number, colors = {}; i < data.length; i += 4) {
    
                mostOccurances |= 0;
    
                let r: number = data[i];
                let g: number = data[i + 1];
                let b: number = data[i + 2];
                let a: number = data[i + 3];
    
                colors[`${r}${g}${b}${a}`] |= 0;
                colors[`${r}${g}${b}${a}`]++
                if(colors[`${r}${g}${b}${a}`] > mostOccurances) {
                    mostOccurances = colors[`${r}${g}${b}${a}`]
                    mostCommon = [r, g, b, a]
                }
            }
            return mostCommon
        }

        const mostCommon = await getDominantColor();

        // chrome.runtime.onMessage = (message, sender, (response) => {

        // }) => {

        // }

        // chrome.tabs.create({ url: URL.createObjectURL(imageData)})
        console.log(`Most common color is rgba(${mostCommon[0]}, ${mostCommon[1]}, ${mostCommon[2]}, ${mostCommon[3]})`)
    })
})();