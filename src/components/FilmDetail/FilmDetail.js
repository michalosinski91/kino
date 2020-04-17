import React from "react";
import { useParams } from "react-router-dom";
import "./FilmDetail.scss";
import FilmInfo from "../FilmInfo/FilmInfo";

export default function FilmDetail() {
  let { id } = useParams();
  return (
    <div className="film-detail">
      <h2 className="heading heading--secondary">Test Title</h2>
      <h3 className="heading heading--tertiary">Test director</h3>
      <img
        src="https://images.unsplash.com/photo-1468857006728-bba1dba0eb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80"
        alt="photo"
        className="film-detail__photo"
      />
      <p className="film-detail__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit
        diam ac odio facilisis tincidunt id rutrum odio. Duis enim urna,
        accumsan nec ligula vel, sagittis volutpat orci. In in vestibulum nisi,
        a volutpat velit. Sed hendrerit diam a velit laoreet, a tincidunt tortor
        mollis. Nunc viverra fringilla suscipit. Vestibulum ipsum nulla,
        imperdiet rutrum elit et, volutpat tempor ante. Integer id sem diam.
        Pellentesque scelerisque id purus et vehicula. Nunc augue risus,
        elementum nec posuere vitae, accumsan a augue. Maecenas faucibus, enim
        vel efficitur viverra, ligula enim bibendum massa, a rhoncus nibh nisl
        sed nulla. Praesent at velit ornare, scelerisque lorem et, aliquet
        lacus. Nam dui nibh, convallis in tellus eu, efficitur posuere diam.
        Aenean consectetur arcu eget dolor dictum, a vestibulum leo ultricies.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Maecenas facilisis purus et metus malesuada viverra.
        Pellentesque eu ex id lorem ultrices lobortis sed vitae lectus. Nullam
        eleifend ut magna at cursus. Nulla laoreet dolor ex, et tempor odio
        auctor vel. Fusce laoreet eros diam, non rhoncus justo gravida pretium.
        Aenean commodo eu leo at accumsan. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Aliquam nec leo euismod, vestibulum elit et,
        consequat ipsum. Curabitur pulvinar malesuada lorem eu venenatis. Etiam
        condimentum augue scelerisque tellus ultricies ullamcorper. Sed sapien
        mauris, scelerisque in risus nec, tempus volutpat nisl. Cras facilisis
        ut mauris sit amet euismod. Donec in nisl eu nulla gravida bibendum ut
        eget eros. Integer bibendum libero faucibus ornare convallis. Nunc eu
        sem mauris. Sed libero eros, pellentesque in libero a, aliquet semper
        urna.
      </p>
      <FilmInfo />
    </div>
  );
}
