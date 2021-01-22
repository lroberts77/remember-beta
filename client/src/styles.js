import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
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
    color: 'rgba(0,183,255, 1)',
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
