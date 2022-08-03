
export const runClock = (setDate) => {
    let date = new Date();
    const now = {
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
    }

    now.h = now.h <= 12 ? now.h : now.h - 12
    now.h = now.h < 10 ? '0' + now.h : now.h
    now.m = now.m < 10 ? '0' + now.m : now.m
    now.s = now.s < 10 ? '0' + now.s : now.s
    return setDate(now)
}