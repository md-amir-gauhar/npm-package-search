import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface IProps {
  name: string;
  description: string;
  npm: string;
  repository: string;
  homepage: string;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const PackageAccordion: React.FC<IProps> = ({
  name,
  description,
  npm,
  repository,
  homepage,
}: IProps) => {
  const classes = useStyles();
  return (
    <div className="package-accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel1a-header">
          <h3 className={classes.heading}>{name}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <p>Description: {description}</p>
            <p>
              npm: <a href={npm}></a>
              {npm}
            </p>
            {repository && (
              <p>
                repository: <a href={repository}></a>
                {repository}
              </p>
            )}
            {homepage ? (
              <p>
                homepage: <a href={homepage}>{homepage}</a>
              </p>
            ) : null}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PackageAccordion;
