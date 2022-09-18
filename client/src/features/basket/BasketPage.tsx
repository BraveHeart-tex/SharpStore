import { Button, Grid, Typography } from '@mui/material';
import BasketSummary from './BasketSummary';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { useAppSelector } from '../../app/store/configureStore';
import BasketTable from './BasketTable';

export default function BasketPage() {
  const { basket } = useAppSelector((state) => state.basket);

  const basketTotal = basket?.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  if (!basket || basket.items.length === 0) {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Typography variant='h3'>Your basket is empty</Typography>
        <Button component={Link} to='/catalog'>
          Go back to the catalog
        </Button>
      </Container>
    );
  }

  return (
    <>
      <BasketTable items={basket.items} />
      {basket.items.length > 0 && (
        <Grid container>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <BasketSummary basketTotal={basketTotal} />
            <Button
              component={Link}
              to='/checkout'
              variant='contained'
              size='large'
              fullWidth
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
