var dateCheck = '';
var output;
function gText(e) {
    //stored selected text in date variable
    dateCheck = (document.all) ? document.selection.createRange().text.toString() : document.getSelection().toString();
    // covert to usable date string
    console.log(dateCheck)
    if (dateCheck.includes('nd')) dateCheck = dateCheck.replace('nd', '');
    if (dateCheck.includes('rd')) dateCheck = dateCheck.replace('rd', '');
    if (dateCheck.includes('th')) dateCheck = dateCheck.replace('th', '');
    if (dateCheck.includes('1st')) dateCheck = dateCheck.replace('1st', '1');
    console.log(dateCheck)
    output = new Date(dateCheck)
    console.log(output)
    if (output != 'Invalid Date') {
        output = output.toISOString();
        output = output.substring(0, 10);
        if (output.includes('2001')) {
            output = output.replace('2001', new Date().getFullYear());
        }
        output = output.replace(/-/g, '');
        console.log('output')
        let url = 'https://calendar.google.com/calendar/render?tab=mc&date=' +
            output + '&mode=day'
        function wrapSelectedText() {
            console.log('wrap is running')
            var selection = window.getSelection().getRangeAt(0);
            var selectedText = selection.extractContents();
            var a = document.createElement("a");
            a.style.fontDecoration = "none";
            a.appendChild(selectedText);
            a.setAttribute('href', `${url}`)
            selection.insertNode(a);
            console.log('hi')
        }
        wrapSelectedText();
    }
}

document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);

