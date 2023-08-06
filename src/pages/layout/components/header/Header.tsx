import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../shared/paths";
import { FC } from "react";
import { useGetAssetsQuery } from "../../../../services/coincap";
import "./Header.scss";
import { Icon } from "@iconify/react";

const Header: FC = () => {
  const { main } = PATHS;
  const { data: assets, isLoading } = useGetAssetsQuery({ limit: 3 });

  return (
    <header className="header">
      <div className="header-currencies">
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          assets &&
          assets.data.map(({ id, name, symbol, priceUsd }) => {
            return (
              <div key={id} className="header-currency__wrapper">
                <img
                  className="header-currency__icon"
                  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                  alt={symbol}
                />
                <div className="header-currency__name">
                  <div>{`${name}`}</div>
                  <div>{`${symbol}`}</div>
                </div>
                <div>{`${new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(+priceUsd)}`}</div>
              </div>
            );
          })}
      </div>
      <Link to={main} className="logo-wrapper">
        <Icon
          icon="game-icons:abstract-006"
          color="#000000"
          width="48"
          height="48"
        />
        <p>Coin Cap App</p>
      </Link>
    </header>
  );
};

export { Header };
