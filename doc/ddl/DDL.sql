-- 사용자 게시물 관련 DDL
-- 사용자 게시물
CREATE TABLE public.resource (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	publisher_id varchar NOT NULL,
	vin int8 NOT NULL,
	description varchar(255) NULL,
	issued timestamp NOT NULL,
	modified timestamp NULL,
	CONSTRAINT resource_pkey PRIMARY KEY (id)
);
ALTER TABLE public.resource ADD CONSTRAINT resource_vin_fk FOREIGN KEY (vin) REFERENCES public.vin(vin_sn);

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

-- 와인
CREATE TABLE public.vin (
	vin_sn int8 NOT NULL,
	vin_name varchar NOT NULL,
	vin_name_kor varchar NULL,
	region varchar NULL,
	taste varchar NULL,
	"type" varchar NULL,
	description varchar(255) NULL,
	issued timestamp NOT NULL,
	modified timestamp NULL,
	CONSTRAINT vin_pkey PRIMARY KEY (vin_sn)
);
ALTER TABLE public.vin ADD CONSTRAINT vin_region_fk FOREIGN KEY (region) REFERENCES public.common_code(code);
ALTER TABLE public.vin ADD CONSTRAINT vin_taste_fk FOREIGN KEY (taste) REFERENCES public.common_code(code);

-- 공통코드
CREATE TABLE public.common_code (
	code varchar NOT NULL,
	code_name varchar NOT NULL,
	code_name_kor varchar NOT NULL,
	sort_order varchar NULL,
	description varchar(255) NULL,
	issued timestamp NOT NULL,
	modified timestamp NULL,
	CONSTRAINT cmmn_pkey PRIMARY KEY (code)
);