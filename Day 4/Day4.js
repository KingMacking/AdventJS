function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h).every((box1, i) => {
        if(i === (boxes.length -1)) return true
        return box1.l < boxes[i + 1].l && box1.w < boxes[i + 1].w && box1.h < boxes[i + 1].h
    });
}