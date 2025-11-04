import { Button } from "@mui/material";
import React from "react";
import { TreatmentCard } from "./TreatmentCard";
import { useNavigate } from "react-router-dom";

import useSound from 'use-sound';
import buttonPressSound from './assets/buttonPress.mp3';

// Asset Imports
import x1 from "./assets/韓国漢方案 1.png";
import x2 from "./assets/リベルサス案修正1 1.png";
import x3 from "./assets/フォシーガ案 1.png";
import x13 from "./assets/リベルサス案修正1 3.png";
import image4 from "./assets/image 2.png";

const descriptionText = (
  <>
    ここに説明文が入ります
    <br />
    ここに説明文が入ります
    <br />
    ここに説明文が入ります
  </>
);

export const Top = () => {
  const navigate = useNavigate();
  const [play] = useSound(buttonPressSound);

  const treatments = [
    { image: x3, title: "マンジャロ", buttonVariant: "text", description: descriptionText, buttonEnabled: true },
    { image: x2, title: "リベルサス", buttonEnabled: false, description: descriptionText, buttonVariant: "text" },
    { image: x3, title: "フォシーガ", description: descriptionText, buttonVariant: "text", buttonEnabled: true },
    { image: x3, title: "ジャディアンス", buttonEnabled: false, titleClassName: "text-wrapper-6", description: descriptionText, buttonVariant: "text" },
    { image: x3, title: "スーグラ", buttonVariant: "text", titleClassName: "text-wrapper-10", description: <>{descriptionText.props.children.slice(0, 4)}</>, buttonEnabled: true },
    { image: x3, title: "カナグル", buttonVariant: "text", titleClassName: "text-wrapper-14", description: descriptionText, buttonEnabled: true },
    { image: x3, title: "メトホルミン", titleClassName: "text-wrapper-8", description: descriptionText, buttonVariant: "text", buttonEnabled: true },
    { image: x3, title: "アカルボース", buttonEnabled: false, titleClassName: "text-wrapper-12", description: descriptionText, buttonVariant: "text" },
    { image: x1, title: "韓国漢方", buttonVariant: "text", titleClassName: "text-wrapper-5", description: descriptionText, buttonEnabled: true },
    { image: x3, title: "ダイエット点滴", titleClassName: "text-wrapper-8", description: descriptionText, buttonVariant: "text", buttonEnabled: true },
    { image: x2, title: "脂肪溶解注射", buttonVariant: "text", titleClassName: "text-wrapper-6", description: <>{descriptionText.props.children.slice(0, 4)}</>, buttonEnabled: true },
    { image: x13, title: "レーザー/ハイフ", buttonVariant: "text", titleClassName: "text-wrapper-6", description: <>{descriptionText.props.children.slice(0, 4)}</>, buttonEnabled: true },
    { image: x13, title: "脂肪冷却", buttonEnabled: false, titleClassName: "text-wrapper-6", description: descriptionText, buttonVariant: "text" },
    { image: x13, title: "EMS", buttonVariant: "text", titleClassName: "text-wrapper-6", description: descriptionText, buttonEnabled: true },
    { image: x3, title: "オゼンピック", buttonEnabled: false, titleClassName: "text-wrapper-13", description: descriptionText, buttonVariant: "text" },
    { image: x3, title: "ゼップバウンド", buttonEnabled: false, titleClassName: "text-wrapper-9", description: descriptionText, buttonVariant: "text" },
  ];

  return (
    <main className="top-page">
      <header className="top-header">
        <img className="top-logo" alt="Logo" src={image4} />
      </header>

      <section className="top-content">
        <p className="top-description">
          ここに説明文が入ります
          <br />
          ここに説明文が入りますここに説明文が入りますここに説明文が入ります
        </p>

        <Button
          className="top-cta-button"
          color="primary"
          size="large"
          variant="contained"
          onClick={() => {
            play();
            navigate("/questions");
          }}
        >
          今すぐ診断スタート
        </Button>

        <div className="top-section-divider">
          {/* Decorative elements can be placed here */}
        </div>

        <div className="treatments-grid">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} {...treatment} />
          ))}
        </div>
      </section>
    </main>
  );
};