
export function uniqueDates(dateStrings) {
    let uniqueSet = new Set();
    return dateStrings.filter(date => {
        let parts = date.split('-');
        let monthYear = parts[0] + '-' + parts[1];
        if (!uniqueSet.has(monthYear)) {
            uniqueSet.add(monthYear);
            return true;
        }
        return false;
    });
}

