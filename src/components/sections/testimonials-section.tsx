"use client";

import { useState } from "react";
import { FloatUp, FloatUpScale } from "@/components/ui/float-up";
import { testimonialsData, type TestimonialContact } from "@/data/testimonials";
import { LuCat, LuRabbit, LuDog, LuBird } from "react-icons/lu";
import "./testimonials-section.css";

const avatarIcons = {
  cat: LuCat,
  rabbit: LuRabbit,
  dog: LuDog,
  bird: LuBird,
};

export function TestimonialsSection() {
  const [selectedId, setSelectedId] = useState<string>(testimonialsData[0].id);

  const activeContact: TestimonialContact =
    testimonialsData.find((c) => c.id === selectedId) || testimonialsData[0];

  return (
    <section id="testimoni" className="site-section testimonials-section">
      <FloatUpScale duration={850} distance={24} blur={8} initialScale={0.94}>
        <div className="testimonials-mat-wrapper">
          {/* Reverse Extrusion Header: White surface, Docker Blue border, stickers as Mac buttons */}
          <div className="testimonials-extrusion-header">
            <div className="testimonials-extrusion-header__dots" aria-hidden="true">
              {/* Red (close) -> Printer */}
              <span className="testimonials-sticker-btn" title="Printer">
                <img
                  src="/images/stickers/sticker-printer.webp"
                  alt=""
                  width={20}
                  height={19}
                  loading="eager"
                />
              </span>
              {/* Yellow (minimize) -> Folder */}
              <span className="testimonials-sticker-btn" title="Folder">
                <img
                  src="/images/stickers/sticker-folder.webp"
                  alt=""
                  width={20}
                  height={18}
                  loading="eager"
                />
              </span>
              {/* Green (maximize) -> Briefcase */}
              <span className="testimonials-sticker-btn" title="Briefcase">
                <img
                  src="/images/stickers/sticker-briefcase.webp"
                  alt=""
                  width={20}
                  height={19}
                  loading="eager"
                />
              </span>
            </div>
            <h2 className="testimonials-extrusion-header__title m-0 p-0 font-inherit leading-normal">
              Testimoni
            </h2>
          </div>

          <div className="chat-mat">
            {/* Mat Interior Split View */}
            <div className="chat-mat__body">
              {/* Left Column: Perfect Merged Column on the same cutting mat blue */}
              <aside className="chat-mat__sidebar">
                <div className="chat-mat__contact-list">
                  {testimonialsData.map((contact) => {
                    const isActive = contact.id === activeContact.id;
                    const IconComp = avatarIcons[contact.avatarIcon];
                    return (
                      <button
                        key={contact.id}
                        type="button"
                        onClick={() => setSelectedId(contact.id)}
                        className={`chat-contact-item ${
                          isActive ? "chat-contact-item--active" : ""
                        }`}
                      >
                        <div className="chat-contact-item__avatar">
                          <IconComp className="chat-contact-item__avatar-icon" />
                        </div>
                        <div className="chat-contact-item__content">
                          <div className="chat-contact-item__top">
                            <span className="chat-contact-item__name">
                              {contact.name}
                            </span>
                            <span className="chat-contact-item__time">
                              {contact.dateStr}
                            </span>
                          </div>
                          <p className="chat-contact-item__snippet">
                            {contact.previewSnippet}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Right Column: Chat Arena with pure cutting mat grid underneath */}
              <main className="chat-mat__main">
                {/* Chat Feed */}
                <div className="chat-mat__messages-container">
                  {activeContact.messages.map((msg, idx, arr) => {
                    const isClient = msg.sender === "client";
                    const isFirstInGroup =
                      idx === 0 || arr[idx - 1].sender !== msg.sender;
                    const isLastInGroup =
                      idx === arr.length - 1 || arr[idx + 1].sender !== msg.sender;

                    return (
                      <FloatUp
                        key={`${activeContact.id}-${msg.id}`}
                        staggerIndex={idx}
                        staggerStep={150}
                        distance={14}
                        duration={650}
                        blur={4}
                        rootMargin="500px"
                        className={`chat-bubble ${
                          isClient
                            ? "chat-bubble--client"
                            : "chat-bubble--admin"
                        } ${
                          isFirstInGroup
                            ? "chat-bubble--has-tail"
                            : "chat-bubble--no-tail"
                        } ${isLastInGroup ? "chat-bubble--group-last" : ""}`}
                      >
                        {isFirstInGroup && (
                          <span
                            className={`chat-bubble__tail ${
                              isClient
                                ? "chat-bubble__tail--left"
                                : "chat-bubble__tail--right"
                            }`}
                            aria-hidden="true"
                          >
                            <svg viewBox="0 0 8 13" width="8" height="13">
                              <path
                                opacity="0.13"
                                d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                              />
                              <path
                                fill="currentColor"
                                d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                              />
                            </svg>
                          </span>
                        )}

                        {msg.forwarded && (
                          <div className="chat-bubble__forwarded">
                            <svg
                              viewBox="0 0 16 16"
                              width="12"
                              height="12"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M1.5 8.5h9.793l-3.647 3.646a.5.5 0 0 0 .708.708l4.5-4.5a.5.5 0 0 0 0-.708l-4.5-4.5a.5.5 0 0 0-.708.708L11.293 7.5H1.5a.5.5 0 0 0 0 1z" />
                            </svg>
                            <span>Forwarded</span>
                          </div>
                        )}

                        {msg.replyQuote && (
                          <div className="chat-bubble__quote">
                            {msg.replyQuote.senderName && (
                              <span className="chat-bubble__quote-author">
                                {msg.replyQuote.senderName}
                              </span>
                            )}
                            <p className="chat-bubble__quote-text">
                              {msg.replyQuote.text}
                            </p>
                          </div>
                        )}

                        {msg.image && (
                          msg.image.src ? (
                            <>
                              <div className="chat-bubble__media-wrap">
                                <img
                                  src={msg.image.src}
                                  alt={msg.image.caption || "Dokumen Nilai"}
                                  className="chat-bubble__media"
                                  loading="lazy"
                                />
                              </div>
                              {msg.image.caption && (
                                <p className="chat-bubble__text">
                                  {msg.image.caption}
                                </p>
                              )}
                            </>
                          ) : (
                            <div className="chat-image-card">
                              <div className="chat-image-card__top">
                                <span className="chat-image-card__score">
                                  {msg.image.scoreTag}
                                </span>
                                <span className="chat-image-card__watermark">
                                  {msg.image.caption}
                                </span>
                              </div>
                              <div className="chat-image-card__subject">
                                {msg.image.subject}
                              </div>
                              {msg.image.highlight && (
                                <div className="chat-image-card__highlight">
                                  “{msg.image.highlight}”
                                </div>
                              )}
                            </div>
                          )
                        )}

                        {msg.text && (
                          <p className="chat-bubble__text">{msg.text}</p>
                        )}

                        <div className="chat-bubble__footer">
                          <span>{msg.time}</span>
                          {!isClient && (
                            <span className="chat-bubble__ticks" aria-label="Read">
                              <svg
                                width="16"
                                height="11"
                                viewBox="0 0 16 11"
                                fill="currentColor"
                              >
                                <path d="M11.07 0.93a.75.75 0 0 0-1.06 0L5.3 5.64l-2.01-2a.75.75 0 0 0-1.06 1.06l2.54 2.53a.75.75 0 0 0 1.06 0l5.24-5.24a.75.75 0 0 0 0-1.06z" />
                                <path d="M15.07 0.93a.75.75 0 0 0-1.06 0L9.3 5.64l-.94-.94a.75.75 0 1 0-1.06 1.06l1.47 1.47a.75.75 0 0 0 1.06 0l5.24-5.24a.75.75 0 0 0 0-1.06z" />
                              </svg>
                            </span>
                          )}
                        </div>
                      </FloatUp>
                    );
                  })}
                </div>
              </main>
            </div>
          </div>
        </div>
        <p className="testimonials-discretion-note">
          *Seluruh testimoni merupakan percakapan nyata dari murid dan wali murid kami, dengan nama serta identitas yang disamarkan demi menghormati privasi.
        </p>
      </FloatUpScale>
    </section>
  );
}
