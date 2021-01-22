import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroungBlendMode: "darken",
        transition: "all 0.25s linear",
        "&:hover": {
            transform: "scale(1.2)"
        }
    },
    border: {
        border: "solid",
    },
    fullHeightCard: {
        height: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
    },
    overlay2: {
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "white",
    },
    grid: {
        display: "flex",
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
    },
    title: {
        padding: "0 16px",
    },
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
    },
});