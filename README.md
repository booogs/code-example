# code-example

This jQuery code triggers the fadeIn jQuery function after scrolling by the .header div.

It subtracts the viewport size from the scrollTop function to get the bottom of the scroll position, and then checks whether its value is greater than the height of the .theader div plus the 150px or however far down you'd like it to fadeIn at.

Since the div must initially be displayed on the page so that we have somewhere to scroll down to we set the visibility to hidden instead of using display:none. We're using fadeIn, which expects the element to start with display:none, so we hide the .header div and fade it in.

We then remove the scroll listener so that the element doesn't continuously hide and fadeIn after we have scrolled past the .footer div.

# See this code in action!

You can see a quick working version of this code at the following link: http://jsfiddle.net/9pjaB/204/
