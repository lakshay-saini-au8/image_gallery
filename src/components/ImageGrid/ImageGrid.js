import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../redux/action/imageAction';
import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }
    render() {
        const { images, isLoading } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.length !== 0
                        ? images.map(image =>
                              image.map(item => (
                                  <div
                                      key={item.id}
                                      className={`item item-${Math.ceil(
                                          item.height / item.width,
                                      )}`}
                                  >
                                      <img
                                          src={item.urls.small}
                                          alt={item.user.username}
                                      />
                                      <p
                                          style={{
                                              background: 'rgb(14, 19, 14)',
                                              position: 'absolute',
                                              top: '0px',
                                              right: '20px',
                                              padding: ' 7px 24px',
                                              color: '#fff',
                                          }}
                                      >
                                          &#128077;{item.likes}
                                      </p>
                                  </div>
                              )),
                          )
                        : null}
                </section>
                <a
                    onClick={this.props.loadImages}
                    style={{
                        cursor: 'pointer',
                        background: 'red',
                        color: '#fff',
                        padding: '10px 20px',
                    }}
                >
                    {isLoading ? `Loading...` : `Load More`}
                </a>
            </div>
        );
    }
}
const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading: isLoading.loading,
    images: images.imageData,
    error: error.imageError,
});

export default connect(mapStateToProps, { loadImages })(ImageGrid);
