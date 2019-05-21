window.onload = function (e) {

    // buttons wave

    var buttons = document.getElementsByClassName('button');

    Array.prototype.forEach.call(buttons, function (b) {
        b.addEventListener('click', createWave);
    });

    function createWave(e) {
        var circle = document.createElement('div');
        this.appendChild(circle);

        var d = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = d + 'px';

        var rect = this.getBoundingClientRect();
        circle.style.left = e.clientX - rect.left - d / 2 + 'px';
        circle.style.top = e.clientY - rect.top - d / 2 + 'px';

        circle.classList.add('wave');
        window.setTimeout(function () { circle.remove(); }, 1000);
    }

}