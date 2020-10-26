import { Component } from "react";
import Menu from "../components/HomeSection/Menu";
import HomeSection from "../components/HomeSection/index";
import AboutSection from "../components/AboutSection/index";
import ResumeSection from "../components/ResumeSection/index";
import ProjectsSection from "../components/ProjectsSection/index";
import BlogSection from "../components/BlogSection/index";
import ContactSection from "../components/ContactSection/index";
import Layout from "../components/Layout";
import $ from "jquery";
const $menu_but =
    ".but-about, .but-resume, .but-portfolio, .but-blog, .but-contact";
const $menu_all =
    ".but-menu, .but-about, .but-resume, .but-portfolio, .but-blog, .but-contact";

export default class Landing extends Component {
    state = {
        meta: {
            title: "Barış DEMİRCİ - Home",
            description: "It's Barış DEMİRCİ!",
        },
    };
    componentDidMount() {
        $(".but-menu").on("click", function () {
            $(this).toggleClass("menu-toggle");
            setTimeout(() => {
                $(".but-about").toggleClass("about-toggle");
            }, 100);
            setTimeout(() => {
                $(".but-resume").toggleClass("resume-toggle");
            }, 200);
            setTimeout(() => {
                $(".but-portfolio").toggleClass("portfolio-toggle");
            }, 300);
            setTimeout(() => {
                $(".but-blog").toggleClass("blog-toggle");
            }, 400);
            setTimeout(() => {
                $(".but-contact").toggleClass("contact-toggle");
            }, 500);
        });
        $($menu_all).on("click", function () {
            $(this).siblings().css({
                "z-index": "5",
            });
            $(this).css({
                "z-index": "10",
            });
        });
        $(".menu-item i").on("click", () => {
            setTimeout(() => {
                $(".page-background").addClass("scale");
            }, 500);
            $($menu_but).addClass("hide");
        });
        $(".close-page").on("click", function () {
            $(".but-menu").addClass("menu-toggle");
            $(this).parents(".section").fadeOut("slow");
            setTimeout(() => {
                $(".page-background").removeClass("scale");
                $(
                    "i.about-show, i.resume-show, i.portfolio-show, i.blog-show, i.contact-show",
                ).fadeIn("slow");
            }, 400);
            setTimeout(() => {
                $($menu_but)
                    .css({
                        "z-index": "4",
                    })
                    .removeClass("hide");
            }, 700);
            $(".page-background").css({
                "z-index": "2",
            });
        });
        $("i.about-show").on("click", () => {
            setTimeout(() => {
                $("i.about-show").fadeOut("fast");
            }, 500);
            setTimeout(() => {
                $(".about").fadeIn("slow");
            }, 1000);
        });
        $("i.resume-show").on("click", () => {
            setTimeout(() => {
                $("i.resume-show").fadeOut("fast");
            }, 500);
            setTimeout(() => {
                $(".resume").fadeIn("slow");
            }, 1000);
        });

        $("i.portfolio-show").on("click", () => {
            setTimeout(() => {
                $("i.portfolio-show").fadeOut("fast");
            }, 500);
            setTimeout(() => {
                $(".portfolio").fadeIn("slow");
                const $item = $(".portfolio-items"),
                    $filters = $(".portfolio-filter ul li");
                $item.isotope();
                $filters.on("click", function () {
                    $filters.removeClass("active");
                    $(this).addClass("active");
                    const selector = $(this).data("filter");
                    $(".portfolio-items").isotope({
                        filter: selector,
                    });
                });
            }, 1000);
        });
        $("i.blog-show").on("click", () => {
            setTimeout(() => {
                $("i.blog-show").fadeOut("fast");
            }, 500);
            setTimeout(() => {
                $(".blog").fadeIn("slow");
            }, 1000);
        });
        $("i.contact-show").on("click", () => {
            setTimeout(() => {
                $("i.contact-show").fadeOut("fast");
            }, 500);
            setTimeout(() => {
                $(".contact").fadeIn("slow");
            }, 1000);
        });
        $(".portfolio-items .video-link").magnificPopup({
            type: "iframe",
        });
        $(".about .video .video-link").magnificPopup({
            type: "iframe",
        });
        $(".validate-input .input").each(function () {
            $(this).on("blur", function () {
                if (validate(this) === false) {
                    showValidate(this);
                } else {
                    $(this).parent().addClass("true-validate");
                }
            });
        });
        const input = $(".validate-input .input");
        $(".validate-form").on("submit", () => {
            let check = true;
            for (let i = 0; i < input.length; i++) {
                if (validate(input[i]) === false) {
                    showValidate(input[i]);
                    check = false;
                }
            }
            return check;
        });
        $(".validate-form .input").each(function () {
            $(this).focus(function () {
                hideValidate(this);
                $(this).parent().removeClass("true-validate");
            });
        });
        function validate(input) {
            if (
                $(input).attr("type") === "email" ||
                $(input).attr("name") === "email"
            ) {
                if (
                    $(input)
                        .val()
                        .trim()
                        .match(
                            /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
                        ) == null
                ) {
                    return false;
                }
            } else if ($(input).val().trim() === "") return false;
        }
        function showValidate(input) {
            const thisAlert = $(input).parent();
            $(thisAlert).addClass("alert-validate");
            $(thisAlert).append('<i class="fas fa-times close-validate"></i>');
            $(".close-validate").each(function () {
                $(this).on("click", function () {
                    hideValidate(this);
                });
            });
        }
        function hideValidate(input) {
            const thisAlert = $(input).parent();
            $(thisAlert).removeClass("alert-validate");
            $(thisAlert).find(".close-validate").remove();
        }
    }
    render() {
        return (
            <Layout meta={this.state.meta}>
                <Menu />
                <HomeSection />
                <AboutSection />
                <ResumeSection />
                <ProjectsSection />
                <BlogSection />
                <ContactSection />
            </Layout>
        );
    }
}
