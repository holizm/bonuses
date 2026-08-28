[
    { $match: { currency } },
    {
        $group: {
            _id: null,
            total: { $sum: '$amount' },
        },
    },
]
