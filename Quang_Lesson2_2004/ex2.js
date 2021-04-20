function UpperCase(str){
    str = str.toLowerCase();
    return str.replace(/^\w|\s\w/g, x => x.toUpperCase());    
}

s = UpperCase('toi tEn la QuaNg')
console.log(s);

// ^\w : ký tự đầu tiên của chuỗi
// | : hoặc là
// \s\w : ký tự đầu tiên sau khoảng trắng
// g: Khớp tất cả các lần xuất hiện.