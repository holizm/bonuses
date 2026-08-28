[
    { $match: { bonus } },
    {
        $group: {
            _id: null,
            total: { $sum: '$amount' },
        },
    },
]
