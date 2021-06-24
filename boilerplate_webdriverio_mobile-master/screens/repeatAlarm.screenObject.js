module.exports = {
    weekdayCheckBox(index){
        return $(`//android.widget.CheckedTextView[@index="${index}"]`);
    }
}