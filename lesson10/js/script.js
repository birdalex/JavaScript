class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height=height;
		this.width=width;
		this.bg=bg;
		this.fontSize=fontSize;
		this.textAlign=textAlign;
	}
	createDiv() {
		let div=document.createElement('div');
		this.height=prompt('Введите высоту');
		this.width=prompt('Введите ширину');
		this.bg=prompt('Введите фон');
		this.fontSize=prompt('Введите размер шрифта');
		this.textAlign=prompt('Введите расположение текста');
		div.innerHTML=prompt('Введите слова', '');
		div.style.cssText=`height:${this.height}px;width:${this.height}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};`;
		document.body.appendChild(div);
	}

}

let task=new options;
task.createDiv();