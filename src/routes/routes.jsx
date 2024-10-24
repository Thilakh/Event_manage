import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/FilterEvents/FilterEvents"
import EventDetail from "../pages/EventDetails/EventDetails"
import Loginpage from "../components/Login/LoginPage"
import Signuppage from "../components/Login/SignupPage"

export const routes = [
  {path:'/',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/login',element:<Loginpage/>},
  {path:'/signup',element:<Signuppage/>},
  {path:'/events/:id',element:<EventDetail/>}
]