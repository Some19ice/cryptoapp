import React, { Fragment } from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const Homepage = () => {
  const { data: myData, isFetching } = useGetCryptosQuery(10);
  const globalStats = myData;

  // const { total, totalExchanges, totalMarketCap, total24hVolume, totalMarkets } = globalStats.data.stats;

  if (isFetching) return 'Loading...';

  // data.stats;

  // console.log(globalStats.data);

  return (
    <Fragment>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.data.stats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.data.stats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.data.stats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.data.stats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.data.stats.totalMarkets)} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Homepage
