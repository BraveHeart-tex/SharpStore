import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/store/configureStore';
import BasketSummary from '../basket/BasketSummary';
import BasketTable from '../basket/BasketTable';

export default function Review() {
  const { basket } = useAppSelector((state) => state.basket);

  const basketTotal = basket?.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      {basket && <BasketTable items={basket.items} isBasket={false} />}
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary basketTotal={basketTotal} />
        </Grid>
      </Grid>
    </>
  );
}
