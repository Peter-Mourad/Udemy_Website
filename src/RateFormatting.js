export default function RateHtmlFormatting(rate) {
    let html = `<span class="rate"><strong>${Math.round(rate * 10) / 10}</strong></span>\n`;
    for (let i = 0; i < 5; i++, rate--){
        if (rate >= 1) 
            html += `\t\t\t\t\t\t\t<i class="fa fa-star"></i>\n`;
        else if (rate > 0) 
            html += `\t\t\t\t\t\t\t<i class="fa fa-star-half-full"></i>\n`;
        else
            html += `<i class="fa fa-star-o"></i>\n`;
    }
    return html;
}