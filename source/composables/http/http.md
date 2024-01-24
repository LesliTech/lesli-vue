# URL
Url constructor for Lesli, this plugin build an url object to be used in Lesli projects

## Initialize
This plugin initializes automatically when the app is loaded and is included in every standard vue app.
It can be accessed from js (vue & pinia) like **this.url** and from html like **url**.

## Methods
This plugin uses method chain and every method has his own set of parameters

**to:** (String) Return an well formated string to use with other methods, links, etc.

**search:** (String) Add a query param to request a search to the server

**paginate:** (page|Number, perPage|Number) Add query params to indicate to the server how to paginate the results 

**order:** (column|String, direction|String) Add a query param to indicate to the server how to order the results

**filter:** (Object) Add query param to indicate to the server an special param to filter data


## Filter 
The filter method allows the user to send special parameters to the server to filter the data. This method should be used with care and DO NOT overuse it by sending too many parameters to the server.

If your controller requires too many filter parameters, consider making it a search controller.

## Custom extensions 
You can request special content type application data by changing the extension of the resource you are requestiong data, using one of the built-in mehotds like .html(), .json(), .pdf(), etc. or send a extension name as parameter to the .toString("xml) method.

### Quick reference

```js
    this.url.to("/administration/users")
    //-> http://0.0.0.0:3000/administration/users

    this.url.admin("users")
    //-> /administration/users

    this.url.admin("users/list")
    //-> /administration/users/list

    this.url.admin("users/options")
    //-> /administration/users/options

    this.url.admin("users/:id", 777)
    this.url.admin("users/:id", { id: 777 })
    //-> /administration/users/777

    this.url.admin("users").search("ldonis")
    //-> /administration/users?search=ldonis

    this.url.admin("users").search("ldonis").paginate(2)
    //-> /administration/users?search=ldonis&page=2

    this.url.admin("users").search("ldonis").paginate(2, 15)
    //-> /administration/users?search=ldonis&page=2&perPage=15

    this.url.admin("users").order("name", "desc")
    //-> /administration/users?orderBy=name&order=desc

    this.url.admin("users").order("name", "desc").toString(true)
    //-> /administration/users.json?orderBy=name&order=desc

    this.url.bell("notifications")
    //-> /bell/notifications

    this.url.driver("calendars/default").filter({ events: ['help'] })
    //-> /driver/calendar.json?f[events]=help

    this.url.driver("calendars/default").filter({ events: ['help', 'focus'] })
    //-> /driver/calendar.json?f[events]=help,focus

    this.url.driver("calendars/default").filter({ events: ['help', 'focus', 'driver'] })
    //-> /driver/calendar.json?f[events]=help,focus,driver

    this.url.driver("calendars/default").filter({ events: ['help'], categories: ['cat1'] })
    //-> /driver/calendar.json?f[events]=help&f[categories]=cat1

    this.url.driver("calendars/default").filter({ events: ['help', 'focus'], categories: ['cat1', 'cat2'] })
    //-> /driver/calendar.json?f[events]=help,focus&f[categories]=cat1,cat2

    this.url.focus("tasks").user()
    this.url.focus("tasks").user(1)


```
