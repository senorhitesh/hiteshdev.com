# Forced Reflow

occurance : A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.

<!-- offsetWidth
offsetHeight
offsetTop
offsetLeft
clientWidth
clientHeight
scrollHeight
scrollTop
getBoundingClientRect()
getComputedStyle() -->

Solution : added passive:true
