import moment from 'moment'

export default [{
    id: '1',
    description: 'Gum',
    note: 'New note 1',
    amount: 195,
    createdAt: 0 
},{
    id: '2',
    description: 'Rent',
    note: 'New note 2',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf() 
},{
    id: '3',
    description: 'Credit card',
    note: 'New note 3',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf() 
}]
