-- 사용자 게시물 관련 DDL
-- 사용자 게시물
CREATE TABLE public.resource (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	publisher_id varchar NOT NULL,
	vin varchar NOT NULL,
	description varchar(255) NULL,
	issued timestamp NOT NULL,
	modified timestamp NULL,
	CONSTRAINT resource_pkey PRIMARY KEY (id)
);

-- 와인 가격
CREATE TABLE public.resource_price (
	resource_id uuid NOT NULL,
	price int4 NOT NULL,
	store varchar NULL,
	issued timestamp NOT NULL,
	modified timestamp NULL,
	CONSTRAINT resource_price_FK  foreign KEY (resource_id) references resource (id)
);

-- 게시물 comment
CREATE TABLE public.resource_comment (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	resource_id uuid NOT NULL,
	commentor_id varchar NOT NULL,
	comment varchar(255) NULL,
	issued timestamp NOT NULL,
	modified timestamp NULL,
	CONSTRAINT resource_comment_FK foreign KEY (resource_id) references resource (id)
);

-- 게시물 image
CREATE TABLE public.resource_image (
	resource_id uuid NOT NULL,
	image_location varchar ,
	issued timestamp NOT null,
	CONSTRAINT resource_image_FK foreign KEY (resource_id) references resource (id)
);