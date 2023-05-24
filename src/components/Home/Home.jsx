import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import EventForm from "./mini_components/EventsForm";
import HelpForm from "./mini_components/HelpForm";
import MarkForm from "./mini_components/MarksForm";
import ScheduleForm from "./mini_components/ScheduleForm";
import classes from "./styles.module.css"

const Home = () =>
{
    return (
        <div>
            <Header />
                <ScheduleForm classes={classes}/>
                <EventForm classes={classes}/>
                <MarkForm classes={classes} />
                <HelpForm classes={classes} />
            <Footer />
        </div>
    )
}

export default Home;