import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql
`query countries {
  countries{
    code
    name
    continent{
      name
    }
    capital
    languages{
      name
    }
    currency
    subdivisions{
      name
    }
  }
  }
`
export const Country_details = gql
`query countries {
  countries{
    code
    name
    continent{
      name
    }
    capital
    languages{
      name
    }
    currency
    subdivisions{
      name
    }
  }
  }`