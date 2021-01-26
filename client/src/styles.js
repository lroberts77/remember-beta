import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: '15px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
  },
  heading: {
    fontFamily: 'Orbitron',
    // color: '#f50057',
    // background: "linear-gradient(90deg, #f50057 0%, rgba(180,234,245,1) 45%, #3f51b5 100%)",
    background: "linear-gradient(90deg, #f50057 0%, #3f51b5 40%, #f50057 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  image: {
    marginLeft: '15px',
    paddingRight: '20px'
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    },
    image: {
      marginLeft: '15px',
      paddingRight: '5px'
    },
    heading: {
    fontSize: '1.6rem'
    },
  }
}));
