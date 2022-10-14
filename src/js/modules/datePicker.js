import AirDatepicker from 'air-datepicker';

export function datePicker() {
  new AirDatepicker('.intro__calendar-input', {
    range: true,
    multipleDatesSeparator: ' - '
  });

}
