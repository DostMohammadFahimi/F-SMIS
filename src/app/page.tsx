"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  User,
  Users,
  Settings,
  BarChart3,
  Calendar,
  ArrowRight,
  Home,
  Award,
  CheckCircle,
} from "lucide-react";
import "./Homepage.css";

const Homepage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = () => {
    setIsButtonActive(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="homepage-container">
      {/* Background Animation */}
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Mouse Follow Effect */}
      <div
        className="mouse-follow-gradient"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Main Content Wrapper */}
      <div className="content-wrapper">
        {/* Header */}
        <header className="header-section">
          <div className="logo-container">
            <div className="logo-icon-wrapper">
              <Home className="logo-icon" />
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text-container">
              <h1 className="logo-title">EduManage</h1>
              <span className="logo-subtitle">Professional</span>
            </div>
            <div className="tagline-container">
              <p className="tagline">
                Streamlining Education, Empowering Futures
              </p>
            </div>

            <div className="header-right">
              <div className="header-button-container">
                <Link href="/admin" className="login-link">
                  <button
                    className={`login-btn ${isHovered ? "btn-hovered" : ""} ${
                      isButtonActive ? "btn-active" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleButtonClick}
                    aria-label="Access admin dashboard"
                  >
                    <span className="btn-content">
                      <Settings className="btn-icon" />
                      <span className="btn-text">Access Dashboard</span>
                      <ArrowRight className="btn-arrow" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="header-right">
            <div className="header-button-container">
              <Link href="/admin" className="login-link">
                <button
                  className={`login-btn ${isHovered ? "btn-hovered" : ""} ${
                    isButtonActive ? "btn-active" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleButtonClick}
                  aria-label="Access admin dashboard"
                >
                  <span className="btn-content">
                    <Settings className="btn-icon" />
                    <span className="btn-text">Access Dashboard</span>
                    <ArrowRight className="btn-arrow" />
                  </span>
                </button>
              </Link>
            </div>
          </div> */}
        </header>

        {/* Hero Section */}
        <main className="hero-section">
          <div className="hero-content">
            {/* Heading */}
            <div className="heading-container">
              <div className="heading-wrapper">
                <h1 className="hero-heading">
                  Welcome to Your School&apos;s
                  <span className="highlighted-text"> Digital Hub</span>
                </h1>
                <div className="heading-accent"></div>
              </div>

              <p className="hero-subtitle">
                A comprehensive platform for students, teachers, and
                administrators to manage academic activities, track progress,
                and foster collaboration in one seamless environment.
              </p>
            </div>

            {/* Features Grid */}
            <div className="features-container">
              <h2 className="features-title">Key Features</h2>
              <div className="feature-grid">
                <article className="feature-item">
                  <div className="feature-icon-container">
                    <div className="feature-icon-wrapper">
                      <BookOpen className="feature-icon" />
                    </div>
                    <div className="feature-icon-bg"></div>
                  </div>
                  <h3 className="feature-title">Academic Management</h3>
                  <p className="feature-description">
                    Streamline courses, assignments, and grading systems
                    efficiently
                  </p>
                </article>

                <article className="feature-item">
                  <div className="feature-icon-container">
                    <div className="feature-icon-wrapper">
                      <User className="feature-icon" />
                    </div>
                    <div className="feature-icon-bg"></div>
                  </div>
                  <h3 className="feature-title">Teacher Portal</h3>
                  <p className="feature-description">
                    Manage classes, track student progress, and organize
                    resources
                  </p>
                </article>

                <article className="feature-item">
                  <div className="feature-icon-container">
                    <div className="feature-icon-wrapper">
                      <Users className="feature-icon" />
                    </div>
                    <div className="feature-icon-bg"></div>
                  </div>
                  <h3 className="feature-title">Student Dashboard</h3>
                  <p className="feature-description">
                    Monitor performance and access learning materials seamlessly
                  </p>
                </article>

                <article className="feature-item">
                  <div className="feature-icon-container">
                    <div className="feature-icon-wrapper">
                      <BarChart3 className="feature-icon" />
                    </div>
                    <div className="feature-icon-bg"></div>
                  </div>
                  <h3 className="feature-title">Analytics</h3>
                  <p className="feature-description">
                    Comprehensive insights and performance tracking
                  </p>
                </article>

                <article className="feature-item">
                  <div className="feature-icon-container">
                    <div className="feature-icon-wrapper">
                      <Calendar className="feature-icon" />
                    </div>
                    <div className="feature-icon-bg"></div>
                  </div>
                  <h3 className="feature-title">Scheduling</h3>
                  <p className="feature-description">
                    Efficient timetable and event management
                  </p>
                </article>

                <article className="feature-item">
                  <div className="feature-icon-container">
                    <div className="feature-icon-wrapper">
                      <Award className="feature-icon" />
                    </div>
                    <div className="feature-icon-bg"></div>
                  </div>
                  <h3 className="feature-title">Achievements</h3>
                  <p className="feature-description">
                    Track and celebrate student accomplishments
                  </p>
                </article>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer-section">
          <div className="footer-content">
            <p className="footer-text">
              © 2025 EduManage Pro. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
              <a href="#" className="footer-link">
                Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
